import { useState, useEffect } from 'react';

const GITHUB_ACCOUNTS = ['donjunior01', 'DONJUNIOR916'];
const GITLAB_USERNAME = 'donjunior01';

// GitHub repo names to hide from the live feed (non-project or meta repos)
const GITHUB_EXCLUDE = new Set([
  'portfolio',
  '-atelierGit1_donfack_assobjio_junior',
]);

// GitLab repo paths to hide (case-insensitive match)
const GITLAB_EXCLUDE_LOWER = new Set([
  'ateliergit1_donfack_assobjio_junior',
]);

const normalizeGithubRepo = (repo) => ({
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
  isPrivate: repo.private === true,
});

const useGitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all GitHub accounts in parallel (type=all includes collaborative repos)
        const githubResponses = await Promise.all(
          GITHUB_ACCOUNTS.map(username =>
            fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=all`)
              .then(r => (r.ok ? r.json() : []))
              .catch(() => [])
          )
        );

        // Merge repos from all accounts, deduplicate by repo id
        const seenIds = new Set();
        const githubData = githubResponses
          .flat()
          .filter(repo => {
            if (GITHUB_EXCLUDE.has(repo.name)) return false;
            if (seenIds.has(repo.id)) return false;
            seenIds.add(repo.id);
            return true;
          })
          .map(normalizeGithubRepo);

        // Fetch GitLab projects
        let gitlabData = [];
        try {
          const gitlabResponse = await fetch(
            `https://gitlab.com/api/v4/users/${GITLAB_USERNAME}/projects?per_page=100&order_by=last_activity_at`
          );
          if (gitlabResponse.ok) {
            const raw = await gitlabResponse.json();
            gitlabData = raw
              .filter(repo => !GITLAB_EXCLUDE_LOWER.has(repo.path.toLowerCase()))
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
                isPrivate: repo.visibility !== 'public',
              }));
          }
        } catch (gitlabError) {
          console.warn('GitLab fetch failed:', gitlabError);
        }

        // Combine and sort by updated date
        const allRepos = [...githubData, ...gitlabData].sort(
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