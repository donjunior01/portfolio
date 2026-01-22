import { View, Text, StyleSheet } from '@react-pdf/renderer';
import CVSection from './CVSection';
import ExperienceItem from './ExperienceItem';
import ProjectItem from './ProjectItem';

const CVMainContent = ({ 
  summary, 
  education, 
  experience, 
  projects, 
  extracurricular, 
  theme, 
  visibleSections,
  translations 
}) => {
  const styles = createStyles(theme);

  return (
    <View style={styles.mainContent}>
      {/* Professional Summary */}
      <CVSection title={translations.summary} theme={theme}>
        <Text style={styles.summaryText}>{summary}</Text>
      </CVSection>

      {/* Education */}
      <CVSection title={translations.education} theme={theme}>
        {education.map((edu, index) => (
          <View key={index} style={styles.educationItem}>
            <View style={styles.eduHeader}>
              <Text style={styles.eduTitle}>{edu.title}</Text>
              <Text style={styles.eduPeriod}>{edu.period}</Text>
            </View>
            <View style={styles.eduInstitution}>
              <Text style={styles.institutionName}>{edu.institution}</Text>
              {edu.location && (
                <Text style={styles.eduLocation}> • {edu.location}</Text>
              )}
            </View>
            {edu.highlights && edu.highlights.length > 0 && (
              <View style={styles.highlights}>
                {edu.highlights.map((highlight, idx) => (
                  <View key={idx} style={styles.highlightItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.highlightText}>{highlight}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </CVSection>

      {/* Professional Experience */}
      <CVSection title={translations.experience} theme={theme}>
        {experience.map((exp, index) => (
          <ExperienceItem 
            key={index} 
            experience={exp} 
            theme={theme}
            translations={translations}
          />
        ))}
      </CVSection>

      {/* Key Projects */}
      {projects && projects.length > 0 && (
        <CVSection title={translations.projects} theme={theme}>
          {projects.map((project, index) => (
            <ProjectItem 
              key={index} 
              project={project} 
              theme={theme}
              translations={translations}
            />
          ))}
        </CVSection>
      )}

      {/* Extracurricular Activities */}
      {visibleSections.extracurricular && extracurricular && extracurricular.length > 0 && (
        <CVSection title={translations.extracurricular} theme={theme}>
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
    </View>
  );
};

const createStyles = (theme) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#e2e8f0' : '#1e293b';
  const secondaryColor = isDark ? '#94a3b8' : '#64748b';
  const accentColor = isDark ? '#06b6d4' : '#2563eb';

  return StyleSheet.create({
    mainContent: {
      width: '65%',
      padding: 12,
      paddingLeft: 15,
    },
    summaryText: {
      fontSize: 9,
      color: textColor,
      lineHeight: 1.4,
      textAlign: 'justify',
    },
    educationItem: {
      marginBottom: 8,
    },
    eduHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 2,
    },
    eduTitle: {
      fontSize: 10,
      fontWeight: 'bold',
      color: textColor,
      flex: 1,
    },
    eduPeriod: {
      fontSize: 8,
      color: secondaryColor,
      fontStyle: 'italic',
    },
    eduInstitution: {
      flexDirection: 'row',
      marginBottom: 2,
    },
    institutionName: {
      fontSize: 9,
      color: accentColor,
      fontWeight: 'bold',
    },
    eduLocation: {
      fontSize: 8,
      color: secondaryColor,
    },
    highlights: {
      marginTop: 2,
    },
    highlightItem: {
      flexDirection: 'row',
      marginBottom: 2,
    },
    bullet: {
      fontSize: 8,
      color: accentColor,
      marginRight: 4,
      marginTop: 1,
    },
    highlightText: {
      fontSize: 8,
      color: textColor,
      flex: 1,
    },
    activityItem: {
      marginBottom: 5,
    },
    activityRole: {
      fontSize: 9,
      fontWeight: 'bold',
      color: textColor,
      marginBottom: 1,
    },
    activityOrg: {
      fontSize: 8,
      color: accentColor,
      marginBottom: 2,
    },
    activityDesc: {
      fontSize: 8,
      color: textColor,
      lineHeight: 1.3,
    },
  });
};

export default CVMainContent;
