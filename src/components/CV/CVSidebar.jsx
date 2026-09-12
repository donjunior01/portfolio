import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import CVSection from './CVSection';

const CVSidebar = ({
  personalInfo,
  skillsByProfile,
  languagesSpoken,
  certifications,
  interests,
  extracurricular,
  theme,
  visibleSections,
  translations,
  version,
}) => {
  const styles = createStyles(theme);

  // Condense to the first three categories for the short version
  const displayCategories = version === 'short'
    ? (skillsByProfile || []).slice(0, 3)
    : (skillsByProfile || []);

  return (
    <View style={styles.sidebar}>
      {/* Languages Spoken */}
      <CVSection title={translations.languages} theme={theme} sidebar>
        {languagesSpoken.map((lang, index) => (
          <View key={index} style={styles.languageItem}>
            <Text style={styles.languageName}>{lang.name}</Text>
            <Text style={styles.languageLevel}> — {lang.level}</Text>
          </View>
        ))}
      </CVSection>

      {/* Technical Skills */}
      <CVSection title={translations.skills} theme={theme} sidebar>
        {displayCategories.map((group, index) => (
          <View key={index} style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>{group.category}</Text>
            <Text style={styles.skillItemsList}>{group.items.join(' • ')}</Text>
          </View>
        ))}
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

      {/* Extracurricular Activities */}
      {visibleSections.extracurricular && extracurricular && extracurricular.length > 0 && (
        <CVSection title={translations.extracurricular} theme={theme} sidebar>
          {extracurricular.map((activity, index) => (
            <View key={index} style={styles.activityItem}>
              <Text style={styles.activityRole}>{activity.role}</Text>
              <Text style={styles.activityOrg}>{activity.organization}</Text>
              {activity.description && (
                <Text style={styles.activityDesc}>{activity.description}</Text>
              )}
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
      padding: 8,
      color: textColor,
    },
    languageItem: {
      marginBottom: 3,
    },
    languageName: {
      fontSize: 8.5,
      fontWeight: 'bold',
      color: textColor,
    },
    languageLevel: {
      fontSize: 7.5,
      color: '#cbd5e1',
      lineHeight: 1.15,
    },
    skillCategory: {
      marginBottom: 3,
    },
    skillCategoryTitle: {
      fontSize: 7.5,
      fontWeight: 'bold',
      color: '#cbd5e1',
      marginBottom: 1.5,
      textTransform: 'uppercase',
    },
    skillItemsList: {
      fontSize: 7.5,
      color: textColor,
      lineHeight: 1.2,
    },
    certItem: {
      marginBottom: 4,
    },
    certName: {
      fontSize: 9,
      color: textColor,
      marginBottom: 1,
    },
    certIssuer: {
      fontSize: 7,
      color: '#cbd5e1',
    },
    interestsList: {
      fontSize: 8,
      color: textColor,
      lineHeight: 1.4,
    },
    activityItem: {
      marginBottom: 4,
    },
    activityRole: {
      fontSize: 9,
      color: textColor,
      marginBottom: 1,
      fontWeight: 'bold',
    },
    activityOrg: {
      fontSize: 8,
      color: '#cbd5e1',
      marginBottom: 2,
    },
    activityDesc: {
      fontSize: 8,
      color: textColor,
      lineHeight: 1.3,
    },
  });
};

export default CVSidebar;