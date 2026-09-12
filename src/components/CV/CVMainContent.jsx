import { View, Text, StyleSheet } from '@react-pdf/renderer';
import CVSection from './CVSection';
import ExperienceItem from './ExperienceItem';
import ProjectItem from './ProjectItem';
import { resolveByProfile } from '../../utils/cvSectionOrder';

const CVMainContent = ({
  summary,
  education,
  experience,
  projects,
  theme,
  visibleSections,
  translations,
  sectionOrder,
  profile,
}) => {
  const styles = createStyles(theme);

  const sections = {
    education: (
      <CVSection key="education" title={translations.education} theme={theme}>
        {education.map((edu, index) => {
          const highlights = resolveByProfile(edu.highlights, profile);
          return (
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
              {highlights && highlights.length > 0 && (
                <View style={styles.highlights}>
                  {highlights.map((highlight, idx) => (
                    <View key={idx} style={styles.highlightItem}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.highlightText}>{highlight}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </CVSection>
    ),
    experience: (
      <CVSection key="experience" title={translations.experience} theme={theme}>
        {experience.map((exp, index) => (
          <ExperienceItem
            key={index}
            experience={exp}
            theme={theme}
            translations={translations}
            profile={profile}
          />
        ))}
      </CVSection>
    ),
    projects: projects && projects.length > 0 && (
      <CVSection key="projects" title={translations.projects} theme={theme}>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            theme={theme}
            translations={translations}
            profile={profile}
          />
        ))}
      </CVSection>
    ),
  };

  return (
    <View style={styles.mainContent}>
      {/* Professional Summary */}
      <CVSection title={translations.summary} theme={theme}>
        <Text style={styles.summaryText}>{summary}</Text>
      </CVSection>

      {sectionOrder.map((key) => sections[key])}
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
      padding: 8,
      paddingLeft: 11,
    },
    summaryText: {
      fontSize: 8.5,
      color: textColor,
      lineHeight: 1.12,
      textAlign: 'justify',
    },
    educationItem: {
      marginBottom: 3,
    },
    eduHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 1,
    },
    eduTitle: {
      fontSize: 9.5,
      fontWeight: 'bold',
      color: textColor,
      flex: 1,
    },
    eduPeriod: {
      fontSize: 7.5,
      color: secondaryColor,
      fontStyle: 'italic',
    },
    eduInstitution: {
      flexDirection: 'row',
      marginBottom: 1,
    },
    institutionName: {
      fontSize: 8.5,
      color: accentColor,
      fontWeight: 'bold',
    },
    eduLocation: {
      fontSize: 7.5,
      color: secondaryColor,
    },
    highlights: {
      marginTop: 1,
    },
    highlightItem: {
      flexDirection: 'row',
      marginBottom: 0.5,
    },
    bullet: {
      fontSize: 7.5,
      color: accentColor,
      marginRight: 4,
      marginTop: 0.5,
    },
    highlightText: {
      fontSize: 7.5,
      color: textColor,
      flex: 1,
      lineHeight: 1.15,
    },
  });
};

export default CVMainContent;
