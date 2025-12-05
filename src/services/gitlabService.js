// GitLab API Service
// Mirrors the GitHub integration so the Projects grid can surface live data from both platforms.

import { GITLAB_CONFIG } from '../config/gitlabConfig';
import { TECH_KEYWORDS, CATEGORY_KEYWORDS } from '../config/githubConfig';

const GITLAB_API_BASE = 'https://gitlab.com/api/v4';
const PROJECT_IMAGE_PLACEHOLDER = 'https://via.placeholder.com/400x250/fc6d26/ffffff?text=GitLab+Project';

let cachedProjects = null;
let cacheTimestamp = null;

/**
 * Fetch user's GitLab projects
 * @param {number} maxProjects - Maximum number of projects to fetch
 * @returns {Promise<Array>} Array of project objects shaped like the Projects UI expects
 */
export const fetchGitLabProjects = async (maxProjects = GITLAB_CONFIG.maxProjects) => {
  if (!GITLAB_CONFIG.enabled) {
    return [];
  }

  if (cachedProjects && cacheTimestamp && Date.now() - cacheTimestamp < GITLAB_CONFIG.cacheDuration) {
    return cachedProjects;
  }

  try {
    const response = await fetch(
      `${GITLAB_API_BASE}/users/${GITLAB_CONFIG.username}/projects?per_page=${maxProjects}` +
      `&order_by=${GITLAB_CONFIG.orderBy}&sort=${GITLAB_CONFIG.sortDirection}` +
      `&with_programming_language=true&include_subgroups=true`,
      {
        headers: buildHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error(`GitLab API error: ${response.status}`);
    }

    const projects = await response.json();

    const transformedProjects = projects
      .filter(project => {
        if (project.forked_from_project) return false;
        if (project.visibility !== 'public') return false;
        if (GITLAB_CONFIG.excludeProjects.includes(project.path)) return false;
        return true;
      })
      .map(project => ({
        id: `gitlab-${project.id}`,
        title: project.name,
        description: project.description || 'No description provided',
        image: project.avatar_url || project.owner?.avatar_url || PROJECT_IMAGE_PLACEHOLDER,
        tech: extractTechStack(project),
        category: categorizeProject(project),
        featured: GITLAB_CONFIG.featuredProjects.includes(project.path) ||
          project.star_count >= GITLAB_CONFIG.minStarsToFeature,
        repoUrl: project.web_url,
        source: 'gitlab',
        demo: project.homepage || null,
        stats: {
          stars: project.star_count,
          forks: project.forks_count,
          watchers: project.watchers_count || 0,
          language: project.programming_language || null,
          updatedAt: project.last_activity_at,
          createdAt: project.created_at,
        },
        highlights: generateHighlights(project),
      }));

    cachedProjects = transformedProjects;
    cacheTimestamp = Date.now();

    return transformedProjects;
  } catch (error) {
    console.error('Error fetching GitLab projects:', error);
    return [];
  }
};

const buildHeaders = () => {
  const headers = {
    'Accept': 'application/json',
  };

  if (GITLAB_CONFIG.personalAccessToken) {
    headers['Authorization'] = `Bearer ${GITLAB_CONFIG.personalAccessToken}`;
  }

  return headers;
};

const extractTechStack = (project) => {
  const tech = [];

  if (project.programming_language) {
    tech.push(project.programming_language);
  }

  const tagList = project.topics || project.tag_list || [];
  tagList.forEach(tag => {
    const normalized = tag.trim();
    if (normalized && !tech.includes(normalized)) {
      tech.push(capitalize(normalized));
    }
  });

  const text = `${project.name} ${project.description || ''}`.toLowerCase();
  Object.keys(TECH_KEYWORDS).forEach(key => {
    if (text.includes(key) && !tech.includes(TECH_KEYWORDS[key])) {
      tech.push(TECH_KEYWORDS[key]);
    }
  });

  return tech.length > 0 ? tech : ['GitLab'];
};

const categorizeProject = (project) => {
  const text = `${project.name} ${project.description || ''} ${project.programming_language || ''}`.toLowerCase();

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return category;
    }
  }

  return 'web';
};

const generateHighlights = (project) => {
  const highlights = [];

  if (project.star_count > 0) {
    highlights.push(`${project.star_count} GitLab star${project.star_count > 1 ? 's' : ''}`);
  }

  if (project.forks_count > 0) {
    highlights.push(`${project.forks_count} fork${project.forks_count > 1 ? 's' : ''}`);
  }

  if (project.programming_language) {
    highlights.push(`Built with ${project.programming_language}`);
  }

  if (project.homepage) {
    highlights.push('Live demo available');
  }

  if (project.last_activity_at) {
    const updatedDate = new Date(project.last_activity_at);
    const monthsAgo = Math.floor((Date.now() - updatedDate.getTime()) / (1000 * 60 * 60 * 24 * 30));
    if (monthsAgo < 3) {
      highlights.push('Recently updated');
    }
  }

  return highlights;
};

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const clearGitLabCache = () => {
  cachedProjects = null;
  cacheTimestamp = null;
};
