import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import CVSection from './CVSection';
import SkillBar from './SkillBar';

const CVSidebar = ({ 
  personalInfo, 
  skills, 
  languagesSpoken, 
  certifications, 
  interests, 
  theme, 
  visibleSections,
  translations,
  version 
}) => {
  const styles = createStyles(theme);
  
  // Condense skills for short version
  const displaySkills = version === 'short' 
    ? {
        languages: skills.languages.slice(0, 5),
        frameworks: skills.frameworks.slice(0, 3),
        databases: skills.databases.slice(0, 3),
      }
    : skills;

  return (
    <View style={styles.sidebar}>
      {/* Languages Spoken */}
      <CVSection title={translations.languages} theme={theme} sidebar>
        {languagesSpoken.map((lang, index) => (
          <View key={index} style={styles.languageItem}>
            <Text style={styles.languageName}>{lang.name}</Text>
            <Text style={styles.languageLevel}>{lang.level}</Text>
          </View>
        ))}
      </CVSection>

      {/* Technical Skills */}
      <CVSection title={translations.skills} theme={theme} sidebar>
        <View style={styles.skillCategory}>
          <Text style={styles.skillCategoryTitle}>Languages</Text>
          {displaySkills.languages.map((skill, index) => (
            <SkillBar key={index} skill={skill} theme={theme} />
          ))}
        </View>

        <View style={styles.skillCategory}>
          <Text style={styles.skillCategoryTitle}>Frameworks</Text>
          {displaySkills.frameworks.map((skill, index) => (
            <SkillBar key={index} skill={skill} theme={theme} />
          ))}
        </View>

        {version === 'full' && (
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Databases</Text>
            {displaySkills.databases.map((skill, index) => (
              <SkillBar key={index} skill={skill} theme={theme} />
            ))}
          </View>
        )}
      </CVSection>

      {/* Certifications */}
      {visibleSections.certifications && certifications.length > 0 && (
        <CVSection title={translations.certifications} theme={theme} sidebar>
          {certifications.map((cert, index) => (
            <View key={index} style={styles.certItem}>
              <Text style={styles.certName}>{cert.name}</Text>
              <Text style={styles.certIssuer}>{cert.issuer}</Text>
            </View>
          ))}
        </CVSection>
      )}

      {/* Interests */}
      {visibleSections.interests && interests && interests.length > 0 && (
        <CVSection title={translations.interests} theme={theme} sidebar>
          <Text style={styles.interestsList}>
            {Array.isArray(interests) ? interests.join(' • ') : interests}
          </Text>
        </CVSection>
      )}
    </View>
  );
};

const createStyles = (theme) => {
  const isDark = theme === 'dark';
  const sidebarBg = isDark ? '#1e3a8a' : '#2563eb';
  const textColor = '#ffffff';

  return StyleSheet.create({
    sidebar: {
      width: '35%',
      backgroundColor: sidebarBg,
      padding: 10, // Reduced padding
      paddingTop: 8,
      color: textColor,
      overflow: 'hidden', // Prevent overflow
    },
    languageItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 3, // Reduced margin
    },
    languageName: {
      fontSize: 7.5, // Reduced
      color: textColor,
    },
    languageLevel: {
      fontSize: 6.5, // Reduced
      color: '#cbd5e1',
      fontStyle: 'italic',
    },
    skillCategory: {
      marginBottom: 6, // Reduced margin
    },
    skillCategoryTitle: {
      fontSize: 6.5, // Reduced
      fontWeight: 'bold',
      color: '#cbd5e1',
      marginBottom: 2,
      textTransform: 'uppercase',
    },
    certItem: {
      marginBottom: 4, // Reduced margin
    },
    certName: {
      fontSize: 7.5, // Reduced
      color: textColor,
      marginBottom: 0.5,
    },
    certIssuer: {
      fontSize: 6, // Reduced
      color: '#cbd5e1',
    },
    interestsList: {
      fontSize: 6.5, // Reduced
      color: textColor,
      lineHeight: 1.3,
    },
  });
};

export default CVSidebar;