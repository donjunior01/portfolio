import { View, Text, StyleSheet } from '@react-pdf/renderer';

const ExperienceItem = ({ experience, theme, translations }) => {
  const styles = createStyles(theme);

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
      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <View style={styles.responsibilities}>
          {experience.responsibilities.map((resp, index) => (
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
      marginBottom: 8,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 2,
    },
    title: {
      fontSize: 9, // Reduced from 10
      fontWeight: 'bold',
      color: textColor,
      flex: 1,
    },
    period: {
      fontSize: 7, // Reduced from 8
      color: secondaryColor,
      fontStyle: 'italic',
    },
    company: {
      flexDirection: 'row',
      marginBottom: 3,
    },
    companyName: {
      fontSize: 8, // Reduced from 9
      color: accentColor,
      fontWeight: 'bold',
    },
    location: {
      fontSize: 7, // Reduced from 8
      color: secondaryColor,
    },
    responsibilities: {
      marginTop: 2,
    },
    responsibilityItem: {
      flexDirection: 'row',
      marginBottom: 2,
    },
    bullet: {
      fontSize: 7, // Reduced from 8
      color: accentColor,
      marginRight: 4,
      marginTop: 1,
    },
    responsibilityText: {
      fontSize: 7, // Reduced from 8
      color: textColor,
      flex: 1,
      lineHeight: 1.3,
    },
  });
};

export default ExperienceItem;
