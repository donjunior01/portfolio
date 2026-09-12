import React, { createContext, useContext, useState } from 'react';
import { cvData } from '../data/cvData';

const CVContext = createContext();

const getDefaultProjectsForProfile = (profile) =>
  cvData.projects.en
    .filter((p) => p.profiles && p.profiles.includes(profile))
    .slice(0, 5)
    .map((p) => p.id);

// Default to Axe-Tech only: combined with the always-appended SERUCA
// supervised project (see CVDocument.jsx), this gives the "Experience &
// Supervised Projects" section its target 2 entries out of the box. The
// other four (JD SARL, SOTICAM, OG/OLABS, Furniture) stay available to
// add back manually via the checkboxes.
const getDefaultExperienceIds = () => ['axe-tech'];

export const useCVContext = () => {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error('useCVContext must be used within a CVProvider');
  }
  return context;
};

export const CVProvider = ({ children }) => {
  // CV Configuration State
  const [cvProfile, setCvProfile] = useState('vision'); // 'vision' or 'software'
  const [selectedProjects, setSelectedProjects] = useState(
    getDefaultProjectsForProfile('vision')
  );
  const [selectedExperience, setSelectedExperience] = useState(getDefaultExperienceIds());
  const [cvLanguage, setCvLanguage] = useState('en');
  const [cvVersion, setCvVersion] = useState('full'); // 'full' or 'short'
  const [visibleSections, setVisibleSections] = useState({
    interests: true,
    certifications: false,
    extracurricular: false,
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [githubProjects, setGithubProjects] = useState([]);
  const [gitlabProjects, setGitlabProjects] = useState([]);

  // Actions
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

  const toggleExperience = (experienceId) => {
    setSelectedExperience(prev => (
      prev.includes(experienceId)
        ? prev.filter(id => id !== experienceId)
        : [...prev, experienceId]
    ));
  };

  const setLanguage = (lang) => {
    setCvLanguage(lang);
  };

  const setProfile = (profile) => {
    setCvProfile(profile);
    const defaults = getDefaultProjectsForProfile(profile);
    setSelectedProjects(
      cvVersion === 'short' ? defaults.slice(0, 3) : defaults
    );
  };

  const setVersion = (version) => {
    setCvVersion(version);

    // Adjust settings for short version
    if (version === 'short') {
      setSelectedProjects(getDefaultProjectsForProfile(cvProfile).slice(0, 3));
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
    setCvProfile('vision');
    setSelectedProjects(getDefaultProjectsForProfile('vision'));
    setSelectedExperience(getDefaultExperienceIds());
    setCvLanguage('en');
    setCvVersion('full');
    setVisibleSections({
      interests: true,
      certifications: false,
      extracurricular: false,
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
    cvProfile,
    selectedProjects,
    selectedExperience,
    cvLanguage,
    cvVersion,
    visibleSections,
    isGenerating,
    githubProjects,
    gitlabProjects,
    setProfile,
    toggleProject,
    toggleExperience,
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
