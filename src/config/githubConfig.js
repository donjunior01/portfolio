// GitHub Configuration
// Update these values to customize the GitHub integration

export const GITHUB_CONFIG = {
  // Your GitHub username
  username: 'donjunior01',
  
  // Maximum number of repositories to fetch
  maxRepos: 20,
  
  // Repositories to exclude (by name)
  excludeRepos: [
    // Add repo names to exclude, e.g.:
    // 'repo-to-exclude',
  ],
  
  // Repositories to feature (by name) - these will be marked as featured
  featuredRepos: [
    // Add repo names to feature, e.g.:
    // 'my-awesome-project',
  ],
  
  // Minimum stars to auto-feature a repository
  minStarsToFeature: 5,
  
  // Sort repositories by
  sortBy: 'updated', // 'updated', 'created', 'pushed', 'full_name'
  
  // Enable/disable GitHub integration
  enabled: true,
  
  // Fallback to manual projects if GitHub fetch fails
  useFallback: true,
  
  // Cache duration in milliseconds (5 minutes)
  cacheDuration: 5 * 60 * 1000,
};

// Tech stack detection keywords
export const TECH_KEYWORDS = {
  'react': 'React',
  'react-native': 'React Native',
  'next': 'Next.js',
  'nextjs': 'Next.js',
  'node': 'Node.js',
  'nodejs': 'Node.js',
  'express': 'Express',
  'typescript': 'TypeScript',
  'javascript': 'JavaScript',
  'python': 'Python',
  'django': 'Django',
  'flask': 'Flask',
  'fastapi': 'FastAPI',
  'mongodb': 'MongoDB',
  'postgresql': 'PostgreSQL',
  'postgres': 'PostgreSQL',
  'mysql': 'MySQL',
  'firebase': 'Firebase',
  'docker': 'Docker',
  'kubernetes': 'Kubernetes',
  'k8s': 'Kubernetes',
  'aws': 'AWS',
  'azure': 'Azure',
  'gcp': 'Google Cloud',
  'tailwind': 'Tailwind CSS',
  'bootstrap': 'Bootstrap',
  'vue': 'Vue.js',
  'angular': 'Angular',
  'graphql': 'GraphQL',
  'rest': 'REST API',
  'api': 'API',
  'redux': 'Redux',
  'nestjs': 'NestJS',
  'prisma': 'Prisma',
  'supabase': 'Supabase',
  'vercel': 'Vercel',
  'netlify': 'Netlify',
  'svelte': 'Svelte',
  'solid': 'SolidJS',
  'expo': 'Expo',
  'vite': 'Vite',
  'webpack': 'Webpack',
  'babel': 'Babel',
  'eslint': 'ESLint',
  'jest': 'Jest',
  'cypress': 'Cypress',
  'playwright': 'Playwright',
  'storybook': 'Storybook',
  'electron': 'Electron',
  'tauri': 'Tauri',
};

// Category detection keywords
export const CATEGORY_KEYWORDS = {
  mobile: ['mobile', 'react-native', 'expo', 'ios', 'android', 'flutter', 'ionic'],
  ai: ['ai', 'ml', 'machine-learning', 'deep-learning', 'tensorflow', 'pytorch', 'nlp', 'computer-vision'],
  web: ['web', 'website', 'react', 'next', 'vue', 'angular', 'frontend', 'backend', 'fullstack'],
  desktop: ['desktop', 'electron', 'tauri', 'qt'],
  cli: ['cli', 'command-line', 'terminal', 'console'],
  library: ['library', 'package', 'npm', 'pypi', 'module'],
  tool: ['tool', 'utility', 'helper', 'automation'],
};
