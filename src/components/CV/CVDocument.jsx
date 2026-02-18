import React from 'react';
import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import CVHeader from './CVHeader';
import CVSidebar from './CVSidebar';
import CVMainContent from './CVMainContent';

const CVDocument = ({ data, theme, selectedProjects, language, version, visibleSections, translations }) => {
  const styles = createStyles(theme);
  
  // Filter selected projects with language support
  const projects = data.projects[language].filter(p => selectedProjects.includes(p.id));
  
  // Filter experience for short version with language support
  const experience = version === 'short' 
    ? data.experience[language].slice(0, 2) 
    : data.experience[language];

  // Get language-specific data
  const personalInfo = {
    ...data.personalInfo[language][0], // Get the first (and only) item from the language array
    linkedin: data.personalInfo.linkedin,
    github: data.personalInfo.github,
    gitlab: data.personalInfo.gitlab,
    website: data.personalInfo.website,
    photoUrl: data.personalInfo.photoUrl,
  };
  const education = data.education[language];
  const languagesSpoken = data.languagesSpoken[language];
  const certifications = data.certifications[language];
  const interests = data.interests[language];
  const extracurricular = data.extracurricular[language];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <CVHeader 
          personalInfo={personalInfo}
          theme={theme}
          translations={translations}
        />
        
        <View style={styles.content}>
          <CVSidebar
            personalInfo={personalInfo}
            skills={data.skills}
            languagesSpoken={languagesSpoken}
            certifications={certifications}
            interests={interests}
            theme={theme}
            visibleSections={visibleSections}
            translations={translations}
            version={version}
          />
          
          <CVMainContent
            summary={data.summary[language]}
            education={education}
            experience={experience}
            projects={projects}
            extracurricular={extracurricular}
            theme={theme}
            visibleSections={visibleSections}
            translations={translations}
          />
        </View>
      </Page>
    </Document>
  );
};

const createStyles = (theme) => {
  const isDark = theme === 'dark';
  
  return StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: isDark ? '#0f172a' : '#ffffff',
      fontFamily: 'Helvetica',
      fontSize: 8, // Reduced from 10 to 8 for more content
    },
    content: {
      flexDirection: 'row',
      flex: 1,
    },
  });
};

export default CVDocument;