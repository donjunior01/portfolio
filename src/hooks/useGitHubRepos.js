import { useState, useEffect } from 'react';

const useGitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch GitHub repos
        const githubResponse = await fetch('https://api.github.com/users/donjunior01/repos?sort=updated&per_page=100');
        if (!githubResponse.ok) throw new Error('Failed to fetch GitHub repositories');
        const githubData = await githubResponse.json();

        // Fetch GitLab repos
        let gitlabData = [];
        try {
          const gitlabResponse = await fetch('https://gitlab.com/api/v4/users/donjunior01/projects?per_page=100');
          if (gitlabResponse.ok) {
            gitlabData = await gitlabResponse.json();
          }
        } catch (gitlabError) {
          console.warn('GitLab fetch failed:', gitlabError);
        }

        // Normalize GitHub repos
        const normalizedGithub = githubData.map(repo => ({
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

        // Normalize GitLab repos
        const normalizedGitlab = gitlabData.map(repo => ({
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