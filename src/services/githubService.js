// GitHub API Service
import { GITHUB_CONFIG, TECH_KEYWORDS, CATEGORY_KEYWORDS } from '../config/githubConfig';

const GITHUB_API_BASE = 'https://api.github.com';
const PROJECT_IMAGE_PLACEHOLDER = 'https://via.placeholder.com/400x250/2563eb/ffffff?text=Project';

// Simple cache implementation
let cachedRepos = null;
let cacheTimestamp = null;

/**
 * Fetch user's GitHub repositories
 * @param {number} maxRepos - Maximum number of repos to fetch
 * @returns {Promise<Array>} Array of repository objects
 */
export const fetchGitHubRepos = async (maxRepos = GITHUB_CONFIG.maxRepos) => {
  // Check cache
  if (cachedRepos && cacheTimestamp && Date.now() - cacheTimestamp < GITHUB_CONFIG.cacheDuration) {
    return cachedRepos;
  }

  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_CONFIG.username}/repos?sort=${GITHUB_CONFIG.sortBy}&per_page=${maxRepos}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    
    // Transform GitHub repos to match our project structure
    const transformedRepos = repos
      .filter(repo => {
        // Only public, non-forked repos
        if (repo.fork || repo.private) return false;
        // Exclude repos in config
        if (GITHUB_CONFIG.excludeRepos.includes(repo.name)) return false;
        return true;
      })
      .map(repo => ({
        id: `github-${repo.id}`,
        title: formatRepoName(repo.name),
        description: repo.description || 'No description provided',
        image: repo.owner.avatar_url || PROJECT_IMAGE_PLACEHOLDER,
        tech: extractTechStack(repo),
        category: categorizeRepo(repo),
        featured: GITHUB_CONFIG.featuredRepos.includes(repo.name) || 
                  repo.stargazers_count >= GITHUB_CONFIG.minStarsToFeature,
        repoUrl: repo.html_url,
        source: 'github',
        demo: repo.homepage || null,
        stats: {
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          watchers: repo.watchers_count,
          language: repo.language,
          updatedAt: repo.updated_at,
          createdAt: repo.created_at,
        },
        highlights: generateHighlights(repo),
      }));

    // Cache the results
    cachedRepos = transformedRepos;
    cacheTimestamp = Date.now();

    return transformedRepos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

/**
 * Format repository name to title case
 * @param {string} name - Repository name
 * @returns {string} Formatted name
 */
const formatRepoName = (name) => {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Extract tech stack from repository
 * @param {object} repo - Repository object
 * @returns {Array<string>} Array of technologies
 */
const extractTechStack = (repo) => {
  const tech = [];
  
  // Add primary language
  if (repo.language) {
    tech.push(repo.language);
  }
  
  // Add common technologies based on repo name and description
  const text = `${repo.name} ${repo.description || ''}`.toLowerCase();
  
  // Use tech keywords from config
  Object.keys(TECH_KEYWORDS).forEach(key => {
    if (text.includes(key) && !tech.includes(TECH_KEYWORDS[key])) {
      tech.push(TECH_KEYWORDS[key]);
    }
  });
  
  return tech.length > 0 ? tech : ['GitHub'];
};

/**
 * Categorize repository
 * @param {object} repo - Repository object
 * @returns {string} Category
 */
const categorizeRepo = (repo) => {
  const text = `${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLowerCase();
  
  // Check each category
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return category;
    }
  }
  
  // Default to web if no specific category
  return 'web';
};

/**
 * Generate highlights from repository data
 * @param {object} repo - Repository object
 * @returns {Array<string>} Array of highlights
 */
const generateHighlights = (repo) => {
  const highlights = [];
  
  if (repo.stargazers_count > 0) {
    highlights.push(`${repo.stargazers_count} GitHub star${repo.stargazers_count > 1 ? 's' : ''}`);
  }
  
  if (repo.forks_count > 0) {
    highlights.push(`${repo.forks_count} fork${repo.forks_count > 1 ? 's' : ''} by community`);
  }
  
  if (repo.language) {
    highlights.push(`Built with ${repo.language}`);
  }
  
  if (repo.homepage) {
    highlights.push('Live demo available');
  }
  
  const updatedDate = new Date(repo.updated_at);
  const monthsAgo = Math.floor((Date.now() - updatedDate.getTime()) / (1000 * 60 * 60 * 24 * 30));
  
  if (monthsAgo < 3) {
    highlights.push('Recently updated');
  }
  
  if (repo.has_wiki) {
    highlights.push('Includes documentation');
  }
  
  return highlights;
};

/**
 * Fetch repository languages
 * @param {string} repoName - Repository name
 * @returns {Promise<object>} Languages object
 */
export const fetchRepoLanguages = async (repoName) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${GITHUB_CONFIG.username}/${repoName}/languages`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching repo languages:', error);
    return {};
  }
};

/**
 * Fetch user profile information
 * @returns {Promise<object>} User profile object
 */
export const fetchGitHubProfile = async () => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_CONFIG.username}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
};

/**
 * Search repositories by topic
 * @param {string} topic - Topic to search for
 * @returns {Promise<Array>} Array of repositories
 */
export const searchReposByTopic = async (topic) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/search/repositories?q=user:${GITHUB_CONFIG.username}+topic:${topic}&sort=updated`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error searching repos by topic:', error);
    return [];
  }
};

/**
 * Clear cached repositories
 */
export const clearCache = () => {
  cachedRepos = null;
  cacheTimestamp = null;
};
