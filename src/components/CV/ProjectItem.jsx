import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { resolveByProfile } from '../../utils/cvSectionOrder';

const ProjectItem = ({ project, theme, translations, profile }) => {
  const styles = createStyles(theme);
  const highlights = resolveByProfile(project.highlights, profile);

  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.name}>{project.name}</Text>
        {project.period && (
          <Text style={styles.period}>{project.period}</Text>
        )}
      </View>
      {(project.role || (project.tech && project.tech.length > 0)) && (
        <View style={styles.subHeader}>
          {project.role && <Text style={styles.role}>{project.role}</Text>}
          {project.tech && project.tech.length > 0 && (
            <Text style={styles.techBadge}>{project.tech.join(' • ')}</Text>
          )}
        </View>
      )}
      {highlights && highlights.length > 0 && (
        <View style={styles.highlights}>
          {highlights.map((highlight, index) => (
            <View key={index} style={styles.highlightItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.highlightText}>{highlight}</Text>
            </View>
          ))}
        </View>
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
    item: {
      marginBottom: 3,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 1,
    },
    name: {
      fontSize: 8.5,
      fontWeight: 'bold',
      color: textColor,
      flex: 1,
    },
    period: {
      fontSize: 7.5,
      color: secondaryColor,
      fontStyle: 'italic',
      whiteSpace: 'nowrap',
    },
    subHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 1,
    },
    role: {
      fontSize: 7,
      color: secondaryColor,
      fontStyle: 'italic',
    },
    techBadge: {
      fontSize: 7,
      color: accentColor,
      fontWeight: 'bold',
    },
    highlights: {
      marginTop: 0.5,
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

export default ProjectItem;
