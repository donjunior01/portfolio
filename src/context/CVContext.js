import React, { createContext, useContext, useState, useEffect } from 'react';
import { cvData } from '../data/cvData';
import { useTheme } from './ThemeContext';

const CVContext = createContext();

export const useCVContext = () => {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error('useCVContext must be used within a CVProvider');
  }
  return context;
};

export const CVProvider = ({ children }) => {
  const { isDark } = useTheme();
  
  // CV Configuration State
  const [cvTheme, setCvTheme] = useState(isDark ? 'dark' : 'light');
  const [selectedProjects, setSelectedProjects] = useState(
    cvData.projects.slice(0, 5).map(p => p.id)
  );
  const [cvLanguage, setCvLanguage] = useState('en');
  const [cvVersion, setCvVersion] = useState('full'); // 'full' or 'short'
  const [visibleSections, setVisibleSections] = useState({
    interests: true,
    certifications: true,
    extracurricular: true,
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [githubProjects, setGithubProjects] = useState([]);
  const [gitlabProjects, setGitlabProjects] = useState([]);

  // Sync theme with portfolio theme
  useEffect(() => {
    setCvTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  // Actions
  const updateTheme = (theme) => {
    setCvTheme(theme);
  };

  const toggleProject = (projectId) => {
    setSelectedProjects(prev => {
      if (prev.includes(projectId)) {
        return prev.filter(id => id !== projectId);
      } else {
        // Limit to 5 projects
        if (prev.length >= 5) {
          return prev;
        }
        return [...prev, projectId];
      }
    });
  };

  const setLanguage = (lang) => {
    setCvLanguage(lang);
  };

  const setVersion = (version) => {
    setCvVersion(version);
    
    // Adjust settings for short version
    if (version === 'short') {
      setSelectedProjects(cvData.projects.slice(0, 3).map(p => p.id));
      setVisibleSections({
        interests: false,
        certifications: false,
        extracurricular: false,
      });
    }
  };

  const toggleSection = (section) => {
    setVisibleSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const resetToDefaults = () => {
    setCvTheme(isDark ? 'dark' : 'light');
    setSelectedProjects(cvData.projects.slice(0, 5).map(p => p.id));
    setCvLanguage('en');
    setCvVersion('full');
    setVisibleSections({
      interests: true,
      certifications: true,
      extracurricular: true,
    });
  };

  const fetchGitHubProjects = async () => {
    try {
      const response = await fetch('https://api.github.com/users/donjunior01/repos?sort=updated&per_page=10');
      if (response.ok) {
        const data = await response.json();
        setGithubProjects(data);
      }
    } catch (error) {
      console.error('Error fetching GitHub projects:', error);
    }
  };

  const fetchGitLabProjects = async () => {
    try {
      const response = await fetch('https://gitlab.com/api/v4/users/donjunior01/projects?per_page=10');
      if (response.ok) {
        const data = await response.json();
        setGitlabProjects(data);
      }
    } catch (error) {
      console.error('Error fetching GitLab projects:', error);
    }
  };

  const value = {
    cvTheme,
    selectedProjects,
    cvLanguage,
    cvVersion,
    visibleSections,
    isGenerating,
    githubProjects,
    gitlabProjects,
    updateTheme,
    toggleProject,
    setLanguage,
    setVersion,
    toggleSection,
    resetToDefaults,
    setIsGenerating,
    fetchGitHubProjects,
    fetchGitLabProjects,
  };

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
};

export default CVContext;