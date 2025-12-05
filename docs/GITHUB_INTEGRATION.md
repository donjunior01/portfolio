# GitHub Projects Integration

This portfolio automatically pulls and displays your real GitHub projects!

## Features

✅ **Automatic GitHub Integration**
- Fetches your latest repositories from GitHub API
- Displays real project data (stars, forks, languages)
- Shows live demo links if available in repo homepage
- Automatically categorizes projects (web, mobile, AI/ML)
- Detects tech stack from repository details

✅ **Smart Caching**
- Caches GitHub data for 5 minutes
- Reduces API calls and improves performance
- Fallback to manual projects if GitHub is unavailable

✅ **Customizable Configuration**
- Easy to configure in `src/config/githubConfig.js`
- Exclude specific repositories
- Feature specific repositories
- Customize tech stack detection keywords

## How It Works

1. **Fetches Repositories**: Automatically fetches your public, non-forked repositories
2. **Transforms Data**: Converts GitHub data to match portfolio project structure
3. **Displays Projects**: Shows projects with GitHub stats (stars, forks)
4. **Smart Categorization**: Auto-categorizes based on tech stack and description

## Configuration

Edit `src/config/githubConfig.js`:

```javascript
export const GITHUB_CONFIG = {
  // Your GitHub username
  username: 'donjunior01',
  
  // Maximum number of repositories to fetch
  maxRepos: 20,
  
  // Repositories to exclude (by name)
  excludeRepos: [
    // 'repo-to-exclude',
  ],
  
  // Repositories to feature (by name)
  featuredRepos: [
    // 'my-awesome-project',
  ],
  
  // Minimum stars to auto-feature
  minStarsToFeature: 5,
  
  // Sort repositories by
  sortBy: 'updated', // 'updated', 'created', 'pushed', 'full_name'
};
```

## Features

### GitHub Stats Badge
- Shows stars ⭐ and forks 🔱 count on project cards
- Automatically displays on projects with GitHub data

### Auto-Categorization
Projects are automatically categorized based on:
- **Mobile**: React Native, Expo, iOS, Android apps
- **AI/ML**: TensorFlow, PyTorch, Machine Learning projects
- **Web**: React, Next.js, Vue, Angular applications

### Tech Stack Detection
Automatically detects technologies from:
- Repository language
- Repository name
- Repository description
- Common tech keywords (React, Node.js, TypeScript, etc.)

## Manual Projects

Manual projects from `portfolioData.js` are still displayed alongside GitHub projects. This allows you to:
- Showcase projects not on GitHub
- Add custom project descriptions and highlights
- Include projects with detailed case studies

## Troubleshooting

### GitHub API Rate Limiting
- GitHub API allows 60 requests/hour for unauthenticated requests
- Projects are cached for 5 minutes to reduce API calls
- If rate limit is hit, app falls back to manual projects

### No Projects Showing
1. Check your GitHub username in `src/config/githubConfig.js`
2. Ensure you have public repositories
3. Check browser console for error messages

### Projects Not Updating
- Clear cache by refreshing the page
- GitHub data is cached for 5 minutes
- Wait a few minutes and refresh

## Customization

### Exclude Repositories
```javascript
excludeRepos: [
  'repo-name-1',
  'repo-name-2',
],
```

### Feature Specific Repositories
```javascript
featuredRepos: [
  'my-best-project',
  'another-awesome-project',
],
```

### Add Tech Keywords
Edit `TECH_KEYWORDS` in `src/config/githubConfig.js`:
```javascript
export const TECH_KEYWORDS = {
  'myframework': 'My Framework',
  'customtech': 'Custom Tech',
  // ... more keywords
};
```

## Benefits

✨ **Always Up-to-Date**: No need to manually update portfolio when you create new projects
✨ **Real GitHub Stats**: Shows actual stars, forks, and activity
✨ **Live Demo Links**: Automatically includes demo links from repo homepage
✨ **Professional**: Displays real, live data from your GitHub profile
✨ **Flexible**: Combine GitHub projects with manual project entries

## API Reference

### `fetchGitHubRepos(maxRepos)`
Fetches repositories from GitHub API
- **Returns**: Array of transformed project objects
- **Caches**: Results for 5 minutes

### `fetchGitHubProfile()`
Fetches user profile information
- **Returns**: GitHub user profile object

### `clearCache()`
Clears cached repository data
- Forces fresh fetch on next request

## Links
- View Source: `src/services/githubService.js`
- Configuration: `src/config/githubConfig.js`
- Component: `src/components/Projects.js`
