import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { resolveByProfile } from '../../utils/cvSectionOrder';

const ExperienceItem = ({ experience, theme, translations, profile }) => {
  const styles = createStyles(theme);
  const responsibilities = resolveByProfile(experience.responsibilities, profile);

  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.title}>{experience.title}</Text>
        <Text style={styles.period}>{experience.period}</Text>
      </View>
      <View style={styles.company}>
        <Text style={styles.companyName}>{experience.company}</Text>
        {experience.location && (
          <Text style={styles.location}> • {experience.location}</Text>
        )}
      </View>
      {experience.project && (
        <Text style={styles.project}>{experience.project}</Text>
      )}
      {responsibilities && responsibilities.length > 0 && (
        <View style={styles.responsibilities}>
          {responsibilities.map((resp, index) => (
            <View key={index} style={styles.responsibilityItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.responsibilityText}>{resp}</Text>
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
    title: {
      fontSize: 9.5,
      fontWeight: 'bold',
      color: textColor,
      flex: 1,
    },
    period: {
      fontSize: 7.5,
      color: secondaryColor,
      fontStyle: 'italic',
    },
    company: {
      flexDirection: 'row',
      marginBottom: 1,
    },
    companyName: {
      fontSize: 8.5,
      color: accentColor,
      fontWeight: 'bold',
    },
    location: {
      fontSize: 7.5,
      color: secondaryColor,
    },
    project: {
      fontSize: 7.5,
      color: textColor,
      fontStyle: 'italic',
      marginBottom: 1,
    },
    responsibilities: {
      marginTop: 1,
    },
    responsibilityItem: {
      flexDirection: 'row',
      marginBottom: 0.5,
    },
    bullet: {
      fontSize: 7.5,
      color: accentColor,
      marginRight: 4,
      marginTop: 0.5,
    },
    responsibilityText: {
      fontSize: 7.5,
      color: textColor,
      flex: 1,
      lineHeight: 1.08,
    },
  });
};

export default ExperienceItem;
