// GitLab Configuration
// Update these values to customize the GitLab integration

export const GITLAB_CONFIG = {
  // Your GitLab username (update if different from GitHub)
  username: 'donjunior01',

  // Maximum number of projects to fetch
  maxProjects: 20,

  // Projects to exclude (by path or name)
  excludeProjects: [
    // e.g. 'legacy-project'
  ],

  // Projects to highlight regardless of stats
  featuredProjects: [
    // e.g. 'awesome-gitlab-project'
  ],

  // Minimum stars to auto-feature a project
  minStarsToFeature: 5,

  // API sorting preferences
  orderBy: 'last_activity_at', // name, created_at, updated_at, last_activity_at
  sortDirection: 'desc', // asc | desc

  // Enable/disable GitLab integration
  enabled: true,

  // Personal Access Token (optional, only if you need to access private projects)
  personalAccessToken: null,

  // Cache duration in milliseconds (5 minutes)
  cacheDuration: 5 * 60 * 1000,
};
