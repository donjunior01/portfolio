import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const CVHeader = ({ personalInfo, theme, translations }) => {
  const styles = createStyles(theme);

  return (
    <View style={styles.header}>
      <View style={styles.nameSection}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.title}>{personalInfo.title}</Text>
      </View>
      
      <View style={styles.contactSection}>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>{personalInfo.email}</Text>
          <Text style={styles.contactItem}>{personalInfo.phone}</Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>{personalInfo.location}</Text>
          <Text style={styles.contactItem}>{personalInfo.website}</Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>{personalInfo.linkedin}</Text>
          <Text style={styles.contactItem}>{personalInfo.github}</Text>
        </View>
      </View>
    </View>
  );
};

const createStyles = (theme) => {
  const isDark = theme === 'dark';
  const primaryColor = isDark ? '#06b6d4' : '#2563eb';
  const textColor = isDark ? '#ffffff' : '#1e293b';
  const secondaryTextColor = isDark ? '#cbd5e1' : '#64748b';

  return StyleSheet.create({
    header: {
      backgroundColor: isDark ? '#1e293b' : '#f8fafc',
      padding: 10, // Reduced padding
      paddingTop: 8,
      paddingBottom: 8,
      borderBottom: `1.5px solid ${primaryColor}`, // Thinner border
    },
    nameSection: {
      marginBottom: 5, // Reduced margin
    },
    name: {
      fontSize: 16, // Further reduced
      fontWeight: 'bold',
      color: primaryColor,
      marginBottom: 2, // Reduced margin
    },
    title: {
      fontSize: 9, // Further reduced
      color: textColor,
      fontWeight: 'bold',
    },
    contactSection: {
      marginTop: 3, // Reduced margin
    },
    contactRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 1, // Reduced margin
    },
    contactItem: {
      fontSize: 6.5, // Further reduced
      color: secondaryTextColor,
      width: '48%',
    },
  });
};

export default CVHeader;