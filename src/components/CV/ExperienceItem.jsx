import { View, Text, StyleSheet } from '@react-pdf/renderer';

const ExperienceItem = ({ experience, theme, translations }) => {
  const styles = createStyles(theme);

  // Limit responsibilities to fit better on one page
  const maxResponsibilities = 3;
  const displayResponsibilities = experience.responsibilities 
    ? experience.responsibilities.slice(0, maxResponsibilities)
    : [];

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
      {displayResponsibilities.length > 0 && (
        <View style={styles.responsibilities}>
          {displayResponsibilities.map((resp, index) => (
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
      marginBottom: 6, // Reduced margin
      pageBreakInside: 'avoid', // Prevent breaking items
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 1, // Reduced margin
    },
    title: {
      fontSize: 8.5, // Further reduced
      fontWeight: 'bold',
      color: textColor,
      flex: 1,
    },
    period: {
      fontSize: 6.5, // Further reduced
      color: secondaryColor,
      fontStyle: 'italic',
    },
    company: {
      flexDirection: 'row',
      marginBottom: 2, // Reduced margin
    },
    companyName: {
      fontSize: 7.5, // Further reduced
      color: accentColor,
      fontWeight: 'bold',
    },
    location: {
      fontSize: 6.5, // Further reduced
      color: secondaryColor,
    },
    responsibilities: {
      marginTop: 1, // Reduced margin
    },
    responsibilityItem: {
      flexDirection: 'row',
      marginBottom: 1, // Reduced margin
    },
    bullet: {
      fontSize: 6.5, // Further reduced
      color: accentColor,
      marginRight: 3, // Reduced margin
      marginTop: 0.5,
    },
    responsibilityText: {
      fontSize: 6.5, // Further reduced
      color: textColor,
      flex: 1,
      lineHeight: 1.2, // Tighter line height
    },
  });
};

export default ExperienceItem;
