import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'donjunior01';
const GITLAB_USERNAME = 'donjunior01';

// Repos to hide from the live feed (non-project or meta repos)
const GITHUB_EXCLUDE = new Set([
  'portfolio',
  '-atelierGit1_donfack_assobjio_junior',
]);

const GITLAB_EXCLUDE = new Set([
  'atelierGit1_donfack_assobjio_junior',
]);

const useGitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        // type=all includes repos the user collaborates on (group/school projects)
        const githubResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=all`
        );
        if (!githubResponse.ok) throw new Error('Failed to fetch GitHub repositories');
        const githubData = await githubResponse.json();

        // Fetch GitLab projects
        let gitlabData = [];
        try {
          const gitlabResponse = await fetch(
            `https://gitlab.com/api/v4/users/${GITLAB_USERNAME}/projects?per_page=100&order_by=last_activity_at`
          );
          if (gitlabResponse.ok) {
            gitlabData = await gitlabResponse.json();
          }
        } catch (gitlabError) {
          console.warn('GitLab fetch failed:', gitlabError);
        }

        // Normalize GitHub repos (filter out excluded repos)
        const normalizedGithub = githubData
          .filter(repo => !GITHUB_EXCLUDE.has(repo.name))
          .map(repo => ({
            id: `github-${repo.id}`,
            name: repo.name,
            description: repo.description || 'No description available',
            language: repo.language || 'Unknown',
            stars: repo.stargazers_count || 0,
            forks: repo.forks_count || 0,
            url: repo.html_url,
            homepage: repo.homepage,
            updated: repo.updated_at,
            created: repo.created_at,
            source: 'GitHub',
            topics: repo.topics || [],
          }));

        // Normalize GitLab repos (filter out excluded repos)
        const normalizedGitlab = gitlabData
          .filter(repo => !GITLAB_EXCLUDE.has(repo.path))
          .map(repo => ({
            id: `gitlab-${repo.id}`,
            name: repo.name,
            description: repo.description || 'No description available',
            language: repo.languages ? Object.keys(repo.languages)[0] : 'Unknown',
            stars: repo.star_count || 0,
            forks: repo.forks_count || 0,
            url: repo.web_url,
            homepage: repo.web_url,
            updated: repo.last_activity_at,
            created: repo.created_at,
            source: 'GitLab',
            topics: repo.topics || [],
          }));

        // Combine and sort by updated date
        const allRepos = [...normalizedGithub, ...normalizedGitlab].sort(
          (a, b) => new Date(b.updated) - new Date(a.updated)
        );

        setRepos(allRepos);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching repositories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
};

export default useGitHubRepos;