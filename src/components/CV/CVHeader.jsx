import React from 'react';
import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const CVHeader = ({ personalInfo, theme, translations }) => {
  const hasPhoto = Boolean(personalInfo.photoUrl);
  const styles = createStyles(theme, hasPhoto);

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <View style={styles.nameSection}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
        </View>

        {hasPhoto && (
          <Image style={styles.photo} src={personalInfo.photoUrl} />
        )}
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

const createStyles = (theme, hasPhoto) => {
  const isDark = theme === 'dark';
  const primaryColor = isDark ? '#06b6d4' : '#2563eb';
  const textColor = isDark ? '#ffffff' : '#1e293b';
  const secondaryTextColor = isDark ? '#cbd5e1' : '#64748b';

  return StyleSheet.create({
    header: {
      backgroundColor: isDark ? '#1e293b' : '#f8fafc',
      padding: 15,
      borderBottom: `2px solid ${primaryColor}`,
    },
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    nameSection: {
      flex: 1,
      marginBottom: 8,
      paddingRight: hasPhoto ? 15 : 0,
    },
    photo: {
      width: 60,
      height: 75,
      borderRadius: 4,
      objectFit: 'cover',
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
      color: primaryColor,
      marginBottom: 3,
    },
    title: {
      fontSize: 12,
      color: textColor,
      fontWeight: 'bold',
    },
    contactSection: {
      marginTop: 5,
    },
    contactRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 2,
    },
    contactItem: {
      fontSize: 8,
      color: secondaryTextColor,
      width: '48%',
    },
  });
};

export default CVHeader;