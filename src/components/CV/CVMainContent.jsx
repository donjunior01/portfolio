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

  // Limit content for better single-page fit
  const maxExperience = 4; // Limit experience items
  const maxProjects = 3;   // Limit project items
  const displayExperience = experience.slice(0, maxExperience);
  const displayProjects = projects ? projects.slice(0, maxProjects) : [];

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
                {edu.highlights.slice(0, 2).map((highlight, idx) => (
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
        {displayExperience.map((exp, index) => (
          <ExperienceItem 
            key={index} 
            experience={exp} 
            theme={theme}
            translations={translations}
          />
        ))}
      </CVSection>

      {/* Key Projects */}
      {displayProjects && displayProjects.length > 0 && (
        <CVSection title={translations.projects} theme={theme}>
          {displayProjects.map((project, index) => (
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
          {extracurricular.slice(0, 2).map((activity, index) => (
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
      padding: 10, // Reduced padding
      paddingLeft: 12,
      paddingTop: 8,
      flex: 1,
      overflow: 'hidden', // Prevent overflow
    },
    summaryText: {
      fontSize: 7.5, // Further reduced
      color: textColor,
      lineHeight: 1.3, // Tighter line height
      textAlign: 'justify',
    },
    educationItem: {
      marginBottom: 6, // Reduced margin
      pageBreakInside: 'avoid', // Prevent breaking items across pages
    },
    eduHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 1,
    },
    eduTitle: {
      fontSize: 8.5, // Slightly reduced
      fontWeight: 'bold',
      color: textColor,
      flex: 1,
    },
    eduPeriod: {
      fontSize: 6.5, // Reduced
      color: secondaryColor,
      fontStyle: 'italic',
    },
    eduInstitution: {
      flexDirection: 'row',
      marginBottom: 1,
    },
    institutionName: {
      fontSize: 7.5, // Reduced
      color: accentColor,
      fontWeight: 'bold',
    },
    eduLocation: {
      fontSize: 6.5, // Reduced
      color: secondaryColor,
    },
    highlights: {
      marginTop: 1,
    },
    highlightItem: {
      flexDirection: 'row',
      marginBottom: 1,
    },
    bullet: {
      fontSize: 6.5, // Reduced
      color: accentColor,
      marginRight: 3,
      marginTop: 0.5,
    },
    highlightText: {
      fontSize: 6.5, // Reduced
      color: textColor,
      flex: 1,
      lineHeight: 1.2,
    },
    activityItem: {
      marginBottom: 4, // Reduced margin
      pageBreakInside: 'avoid',
    },
    activityRole: {
      fontSize: 7.5, // Reduced
      fontWeight: 'bold',
      color: textColor,
      marginBottom: 0.5,
    },
    activityOrg: {
      fontSize: 6.5, // Reduced
      color: accentColor,
      marginBottom: 1,
    },
    activityDesc: {
      fontSize: 6.5, // Reduced
      color: textColor,
      lineHeight: 1.2,
    },
  });
};

export default CVMainContent;
