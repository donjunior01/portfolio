import { View, Text, StyleSheet } from '@react-pdf/renderer';

const ProjectItem = ({ project, theme, translations }) => {
  const styles = createStyles(theme);

  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.name}>{project.name}</Text>
        {project.role && (
          <Text style={styles.role}>{project.role}</Text>
        )}
      </View>
      {project.description && (
        <Text style={styles.description}>{project.description}</Text>
      )}
      {project.tech && project.tech.length > 0 && (
        <View style={styles.techContainer}>
          {project.tech.map((tech, index) => (
            <Text key={index} style={styles.techBadge}>
              {tech}
              {index < project.tech.length - 1 ? ' • ' : ''}
            </Text>
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
      marginBottom: 5, // Reduced margin
      pageBreakInside: 'avoid', // Prevent breaking items
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 1, // Reduced margin
    },
    name: {
      fontSize: 7.5, // Further reduced
      fontWeight: 'bold',
      color: textColor,
      flex: 1,
    },
    role: {
      fontSize: 5.5, // Further reduced
      color: secondaryColor,
      fontStyle: 'italic',
    },
    description: {
      fontSize: 6.5, // Further reduced
      color: textColor,
      marginBottom: 2, // Reduced margin
      lineHeight: 1.2, // Tighter line height
    },
    techContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    techBadge: {
      fontSize: 5.5, // Further reduced
      color: accentColor,
      fontWeight: 'bold',
    },
  });
};

export default ProjectItem;
