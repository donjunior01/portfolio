import { useState, useEffect } from 'react';

const GITHUB_ACCOUNTS = ['donjunior01', 'DONJUNIOR916'];

// GitLab user IDs for both accounts
const GITLAB_USER_IDS = [26455293, 26455308]; // donjunior01, DONJUNIOR916

// GitHub repo names to hide (non-project or meta repos)
const GITHUB_EXCLUDE = new Set([
  'portfolio',
  '-atelierGit1_donfack_assobjio_junior',
]);

// GitLab repo paths to hide (case-insensitive)
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

const normalizeGitlabRepo = (repo) => ({
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
              .then(r => r.ok ? r.json() : [])
              .catch(() => [])
          )
        );

        // Deduplicate by repo id across all accounts
        const seenGithubIds = new Set();
        const githubData = githubResponses
          .flat()
          .filter(repo => {
            if (GITHUB_EXCLUDE.has(repo.name)) return false;
            if (seenGithubIds.has(repo.id)) return false;
            seenGithubIds.add(repo.id);
            return true;
          })
          .map(normalizeGithubRepo);

        // Fetch GitLab owned projects + contributed projects for each user ID
        let gitlabData = [];
        try {
          const gitlabFetches = GITLAB_USER_IDS.flatMap(id => [
            fetch(`https://gitlab.com/api/v4/users/${id}/projects?per_page=100&order_by=last_activity_at`)
              .then(r => r.ok ? r.json() : []).catch(() => []),
            fetch(`https://gitlab.com/api/v4/users/${id}/contributed_projects?per_page=100`)
              .then(r => r.ok ? r.json() : []).catch(() => []),
          ]);

          const gitlabResponses = await Promise.all(gitlabFetches);
          const seenGitlabIds = new Set();

          gitlabData = gitlabResponses
            .flat()
            .filter(repo => {
              if (GITLAB_EXCLUDE_LOWER.has(repo.path.toLowerCase())) return false;
              if (repo.visibility === 'private') return false;
              if (seenGitlabIds.has(repo.id)) return false;
              seenGitlabIds.add(repo.id);
              return true;
            })
            .map(normalizeGitlabRepo);
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