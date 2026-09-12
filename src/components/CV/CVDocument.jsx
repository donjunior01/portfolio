import React from 'react';
import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import CVHeader from './CVHeader';
import CVSidebar from './CVSidebar';
import CVMainContent from './CVMainContent';
import { getSectionOrder } from '../../utils/cvSectionOrder';

const CVDocument = ({ data, theme, selectedProjects, language, version, visibleSections, translations, profile = 'vision' }) => {
  const styles = createStyles(theme);

  const sectionOrder = getSectionOrder(profile, language);

  // Filter selected projects with language support, then order per profile
  const projectOrder = data.projectOrder?.[profile] || [];
  const projects = data.projects[language]
    .filter(p => selectedProjects.includes(p.id))
    .sort((a, b) => {
      const ia = projectOrder.indexOf(a.id);
      const ib = projectOrder.indexOf(b.id);
      return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
    });

  // Filter experience for short version with language support
  const experience = version === 'short'
    ? data.experience[language].slice(0, 2)
    : data.experience[language];

  // Get language-specific data
  const rawPersonalInfo = data.personalInfo[language][0];
  const personalInfo = {
    ...rawPersonalInfo,
    title: rawPersonalInfo.titles[profile],
    linkedin: data.personalInfo.linkedin,
    github: data.personalInfo.github,
    gitlab: data.personalInfo.gitlab,
    website: data.personalInfo.website,
    photoUrl: data.personalInfo.photoUrl,
  };
  // The exact reference CV shows only the UTBM + Institut Saint Jean entries
  const education = data.education[language].filter(e => e.includeInCV !== false);
  const languagesSpoken = data.languagesSpoken[language];
  const certifications = data.certifications[language];
  const interests = data.interests[language];
  const extracurricular = data.extracurricular[language];

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap={true}>
        <CVHeader 
          personalInfo={personalInfo}
          theme={theme}
          translations={translations}
        />
        
        <View style={styles.content}>
          <CVSidebar
            personalInfo={personalInfo}
            skills={data.skills}
            skillsByProfile={data.skillsByProfile?.[profile]?.[language]}
            languagesSpoken={languagesSpoken}
            certifications={certifications}
            interests={interests}
            extracurricular={extracurricular}
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
            theme={theme}
            visibleSections={visibleSections}
            translations={translations}
            sectionOrder={sectionOrder}
            profile={profile}
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
      padding: 0, // Remove default padding to prevent overflow
      margin: 0, // Remove default margin to prevent overflow
    },
    content: {
      flexDirection: 'row',
      flex: 1,
    },
  });
};

export default CVDocument;