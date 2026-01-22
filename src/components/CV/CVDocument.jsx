import React from 'react';
import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import CVHeader from './CVHeader';
import CVSidebar from './CVSidebar';
import CVMainContent from './CVMainContent';

const CVDocument = ({ data, theme, selectedProjects, language, version, visibleSections, translations }) => {
  const styles = createStyles(theme);
  
  // Filter selected projects
  const projects = data.projects.filter(p => selectedProjects.includes(p.id));
  
  // Filter experience for short version
  const experience = version === 'short' 
    ? data.experience.slice(0, 2) 
    : data.experience;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <CVHeader 
          personalInfo={data.personalInfo}
          theme={theme}
          translations={translations}
        />
        
        <View style={styles.content}>
          <CVSidebar
            personalInfo={data.personalInfo}
            skills={data.skills}
            languagesSpoken={data.languagesSpoken}
            certifications={data.certifications}
            interests={data.interests}
            theme={theme}
            visibleSections={visibleSections}
            translations={translations}
            version={version}
          />
          
          <CVMainContent
            summary={data.summary[language]}
            education={data.education}
            experience={experience}
            projects={projects}
            extracurricular={data.extracurricular}
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
      fontSize: 10,
    },
    content: {
      flexDirection: 'row',
      flex: 1,
    },
  });
};

export default CVDocument;