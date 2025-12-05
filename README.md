# Donfack Assobjio Junior - Professional Portfolio

A modern, responsive portfolio website built with React Native Web, showcasing my projects, skills, and professional journey as a Software Engineering student.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme toggle with persistent user preference
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Filterable project gallery with detailed descriptions
- **Professional Sections**:
  - Hero/Landing page
  - About & Education
  - Technical Skills with progress bars
  - Projects showcase with filtering
  - Work Experience timeline
  - Achievements & Certifications
  - Contact form with social links
  - Downloadable CV

## 🛠️ Technologies Used

- **Framework**: React Native with Expo
- **Web Support**: React Native Web
- **Navigation**: Smooth scroll navigation
- **Animations**: React Native Reanimated
- **Icons**: Expo Vector Icons
- **Email**: EmailJS for contact form
- **Storage**: AsyncStorage for theme persistence
- **Styling**: Custom styled components with theme system

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Git

## 🔧 Installation & Setup

1. **Clone the repository** (or you're already in it!)
   ```bash
   cd "C:\Users\THE TECHNOLOGUE\Documents\portfolio"
   ```

2. **Install dependencies** (Already done!)
   ```bash
   npm install
   ```

3. **Update Personal Information**
   
   Edit `assets/data/portfolioData.js` and update:
   - Personal information (name, email, phone, bio)
   - Social media links (GitHub, LinkedIn)
   - Education details
   - Skills and proficiency levels
   - Projects (add your actual projects)
   - Work experience
   - Certifications
   - Achievements

4. **Configure EmailJS** (for contact form)
   
   a. Sign up at [EmailJS](https://www.emailjs.com/)
   b. Create a new email service
   c. Create an email template
   d. Get your Service ID, Template ID, and Public Key
   e. Update `EMAIL_CONFIG` in `assets/data/portfolioData.js`

5. **Run the development server**
   ```bash
   npm run web
   ```
   
   The app will open in your browser at `http://localhost:8081`

## 📱 Available Scripts

- `npm run web` - Start the web development server
- `npm run android` - Start the Android development server
- `npm run ios` - Start the iOS development server (macOS only)
- `npm start` - Start the Expo development server

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build for production**
   ```bash
   npx expo export:web
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build for production**
   ```bash
   npx expo export:web
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=web-build
   ```

### Alternative: Use GitHub Pages

1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add scripts to `package.json`:
   ```json
   "predeploy": "npx expo export:web",
   "deploy": "gh-pages -d web-build"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 📂 Project Structure

```
portfolio/
├── assets/
│   └── data/
│       └── portfolioData.js      # All your personal data
├── src/
│   ├── components/
│   │   ├── Header.js             # Navigation header
│   │   ├── Hero.js               # Landing section
│   │   ├── About.js              # About & Education
│   │   ├── Projects.js           # Project showcase
│   │   ├── Experience.js         # Work experience
│   │   ├── Achievements.js       # Awards & achievements
│   │   └── Contact.js            # Contact form
│   ├── constants/
│   │   └── theme.js              # Theme colors and styles
│   ├── hooks/
│   │   └── useTheme.js           # Theme context and hook
│   └── utils/
├── App.js                        # Main app component
├── app.json                      # Expo configuration
└── package.json                  # Dependencies
```

## 🎨 Customization

### Change Colors
Edit `src/constants/theme.js` to customize the color scheme for light and dark modes.

### Add Sections
Create new components in `src/components/` and import them in `App.js`.

### Modify Layout
Adjust spacing, fonts, and sizes in `src/constants/theme.js`.

## 📊 Analytics (Optional)

To add Google Analytics:

1. Install:
   ```bash
   npm install react-ga4
   ```

2. Initialize in `App.js`:
   ```javascript
   import ReactGA from 'react-ga4';
   ReactGA.initialize('YOUR_MEASUREMENT_ID');
   ```

## 🔒 Environment Variables

For sensitive data (like EmailJS keys), create a `.env` file:

```env
EMAIL_SERVICE_ID=your_service_id
EMAIL_TEMPLATE_ID=your_template_id
EMAIL_PUBLIC_KEY=your_public_key
```

And use `expo-constants` to access them.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Donfack Assobjio Junior**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React Native & Expo teams
- All open-source contributors
- Saint Jean University

## 📞 Support

If you have any questions or need help with setup, feel free to reach out!

---

**Made with ❤️ by Don Junior**
