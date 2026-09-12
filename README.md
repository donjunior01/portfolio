# Junior Donfack Assobjio - Professional Portfolio

A modern, feature-rich portfolio website with dynamic CV generation capabilities. Built with React, TailwindCSS, and advanced PDF generation technology.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-38bdf8) ![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Live Demo

**Portfolio:** [https://donjunior01.github.io/portfolio](https://donjunior01.github.io/portfolio)

## ✨ Key Features

### Portfolio Features
- **Modern Responsive Design** - Mobile-first approach with glassmorphism effects
- **Dark/Light Theme** - Seamless theme switching with persistent preferences
- **Smooth Animations** - Page transitions and scroll effects using Framer Motion
- **GitHub/GitLab Integration** - Automatically fetches and displays your repositories
- **Interactive Contact Form** - Functional form with validation using Web3Forms
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Performance Optimized** - Lazy loading, code splitting, and optimized assets

### Dynamic CV Generation System
- **Real-time PDF Generation** - Create professional CVs on-the-fly
- **Live Preview** - See changes instantly as you customize
- **Dual Themes** - Dark and Light CV themes
- **Bilingual Support** - English and French translations
- **Multiple Versions** - Full CV and Short CV options
- **Project Selection** - Choose up to 5 projects to showcase
- **Customizable Sections** - Toggle optional content (interests, certifications, activities)
- **Email Integration** - Send CV directly via email (EmailJS)
- **Smart Download** - Auto-generated filenames based on your selections
- **One-Page Format** - Professional A4 layout with two-column design

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Yarn package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/donjunior01/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
yarn install
```

3. **Start development server**
```bash
yarn start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/              # Static assets
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── CV/              # CV PDF components
│   │   │   ├── CVDocument.jsx
│   │   │   ├── CVHeader.jsx
│   │   │   ├── CVSidebar.jsx
│   │   │   ├── CVMainContent.jsx
│   │   │   ├── CVSection.jsx
│   │   │   ├── SkillBar.jsx
│   │   │   ├── ExperienceItem.jsx
│   │   │   └── ProjectItem.jsx
│   │   ├── ErrorBoundary.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── ProjectCard.js
│   │   ├── ScrollToTop.js
│   │   ├── ServiceCard.js
│   │   └── SkillBar.js
│   ├── context/
│   │   ├── CVContext.js     # CV state management
│   │   └── ThemeContext.js  # Theme state management
│   ├── data/
│   │   └── cvData.js        # CV data configuration
│   ├── hooks/
│   │   └── useGitHubRepos.js
│   ├── pages/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── CVPage.jsx       # CV customization page
│   │   ├── Home.js
│   │   ├── Projects.js
│   │   ├── Services.js
│   │   └── Skills.js
│   ├── translations/
│   │   └── cvTranslations.js # CV translations
│   ├── utils/
│   │   ├── constants.js
│   │   ├── emailService.js   # Email CV functionality
│   │   ├── helpers.js
│   │   └── pdfGenerator.js   # PDF generation logic
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Technology Stack

### Core Technologies
- **React 18.2.0** - Modern React with hooks and context
- **React Router v6** - Client-side routing with HashRouter
- **TailwindCSS 3.3.0** - Utility-first CSS framework
- **Framer Motion 10.16.4** - Animation library

### CV Generation
- **@react-pdf/renderer 3.1.14** - PDF generation from React components
- **file-saver 2.0.5** - Client-side file downloads
- **emailjs-com 3.2.0** - Email service integration

### APIs & Services
- **GitHub API** - Repository fetching
- **GitLab API** - Repository fetching
- **Web3Forms** - Contact form handling
- **EmailJS** - CV email delivery (optional)

### Development Tools
- **Create React App** - Build tooling
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📄 Pages Overview

### 1. Home (`/`)
- Hero section with animated roles
- Statistics showcase
- Featured projects preview
- Call-to-action sections

### 2. About (`/about`)
- Professional biography
- Education history
- Work experience
- Extracurricular activities
- Personal interests

### 3. Skills (`/skills`)
- Programming languages with proficiency levels
- Frameworks and libraries
- Databases and tools
- Core competencies
- Visual skill indicators

### 4. Projects (`/projects`)
- Featured projects showcase
- GitHub/GitLab repository integration
- Filter by language
- Search functionality
- Live links and demos

### 5. Services (`/services`)
- Service offerings
- Technology stack per service
- Work process overview
- Contact call-to-action

### 6. Contact (`/contact`)
- Contact information
- Functional contact form
- Social media links
- Form validation

### 7. CV Generator (`/cv`)
- Theme selection (Dark/Light)
- Language selection (English/French)
- Version selection (Full/Short)
- Project selection (up to 5)
- Optional sections toggle
- Real-time preview
- Download functionality
- Email sending capability

## ⚙️ Configuration

### 1. Personal Information

Update your details in `src/utils/constants.js`:
```javascript
export const personalInfo = {
  name: 'Your Name',
  email: 'your@email.com',
  phone: '+237 XXX XXX XXX',
  location: 'Your City, Country',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  gitlab: 'https://gitlab.com/yourusername',
};
```

### 2. CV Data

Update CV-specific information in `src/data/cvData.js`:
```javascript
export const cvData = {
  personalInfo: { /* your info */ },
  summary: {
    en: 'Your English summary...',
    fr: 'Votre résumé en français...',
  },
  education: [ /* your education */ ],
  experience: [ /* your experience */ ],
  projects: [ /* your projects */ ],
  skills: { /* your skills */ },
  // ... more sections
};
```

### 3. Contact Form Setup

1. Go to [Web3Forms](https://web3forms.com/)
2. Get your free access key
3. Update in `src/pages/Contact.js`:
```javascript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'
```

### 4. Email CV Setup (Optional)

To enable email CV functionality:

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Add email service (Gmail, Outlook, etc.)
3. Create email template
4. Update credentials in `src/utils/emailService.js`:
```javascript
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
};
```

### 5. GitHub/GitLab Integration

Update usernames in:
- `src/utils/constants.js` - For portfolio links
- `src/hooks/useGitHubRepos.js` - For API calls (if needed)

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... your colors
      },
      dark: {
        900: '#0f172a',
        // ... your colors
      },
    },
  },
}
```

### CV Layout

Adjust column widths in `src/components/CV/CVDocument.jsx`:
```javascript
sidebar: { width: '35%' }  // Left sidebar
mainContent: { width: '65%' }  // Right content
```

### Animations

Modify animation settings in component files using Framer Motion:
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Update package.json**
```json
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

2. **Install gh-pages** (if not already installed)
```bash
yarn add gh-pages --dev
```

3. **Build and deploy**
```bash
yarn build
yarn deploy
```

4. **Enable GitHub Pages**
- Go to repository Settings > Pages
- Select `gh-pages` branch
- Save

Your site will be live at `https://yourusername.github.io/portfolio`

### Deploy to Other Platforms

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

#### Custom Server
```bash
yarn build
# Upload the 'build' folder to your server
```

## 🔧 Available Scripts

```bash
# Development
yarn start          # Start development server
yarn build          # Build for production
yarn test           # Run tests
yarn eject          # Eject from Create React App

# Deployment
yarn deploy         # Deploy to GitHub Pages

# Linting & Formatting
yarn lint           # Run ESLint (if configured)
yarn format         # Format code (if configured)
```

## 📱 CV System Usage

### Quick Download
1. Click **CV** dropdown in navbar
2. Select **Quick Download**
3. CV downloads with default settings

### Custom CV
1. Navigate to `/cv` or click **Customize CV**
2. Select your preferences:
   - Theme (Dark/Light)
   - Language (English/French)
   - Version (Full/Short)
   - Projects (up to 5)
   - Optional sections
3. Preview updates in real-time
4. Click **Download CV**

### Email CV
1. Click **Send by Email**
2. Enter recipient details
3. Add optional message
4. Click **Send Email**

### CV Features
- **Filename Format**: `Junior_Donfack_CV[_Short][_EN|_FR][_Dark].pdf`
- **Layout**: Two-column (35% sidebar + 65% main content)
- **Format**: One-page A4
- **Sections**: Header, Skills, Languages, Education, Experience, Projects, Activities

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lazy loading for images and components
- Code splitting for optimal bundle size

## 🔒 Security

- No sensitive data in client-side code
- Environment variables for API keys
- HTTPS enforced on production
- XSS protection
- CSRF protection on forms

## 🐛 Troubleshooting

### Common Issues

**Issue: CV preview not loading**
- Check browser console for errors
- Ensure all dependencies are installed
- Try refreshing the page

**Issue: GitHub API rate limit**
- GitHub API has rate limits for unauthenticated requests
- Consider adding authentication token for higher limits

**Issue: Email not sending**
- Verify EmailJS configuration
- Check service and template IDs
- Ensure recipient email is valid

**Issue: Build fails**
- Clear node_modules and reinstall: `rm -rf node_modules && yarn install`
- Clear cache: `yarn cache clean`
- Check for dependency conflicts

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Junior Donfack Assobjio**

- Email: junior.donfack-assobjio@utbm.fr
- LinkedIn: [Junior Donfack Assobjio](https://www.linkedin.com/in/junior-donfack-assobjio-905bb72b5/)
- GitHub: [@donjunior01](https://github.com/donjunior01)
- GitLab: [@donjunior01](https://gitlab.com/donjunior01)
- Portfolio: [donjunior01.github.io/portfolio](https://donjunior01.github.io/portfolio)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- PDF generation powered by [@react-pdf/renderer](https://react-pdf.org/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

For support, email junior.donfack-assobjio@utbm.fr or create an issue in the repository.

## 🗺️ Roadmap

### Upcoming Features
- [ ] Blog section
- [ ] Multiple CV templates
- [ ] More language options
- [ ] LinkedIn profile import
- [ ] GitHub stats integration
- [ ] Testimonials section
- [ ] Analytics dashboard

---

**Made with ❤️ by Junior Donfack Assobjio**

⭐ Star this repository if you find it helpful!
