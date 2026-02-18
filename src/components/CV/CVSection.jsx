import { View, Text, StyleSheet } from '@react-pdf/renderer';

const CVSection = ({ title, theme, sidebar = false, children }) => {
  const styles = createStyles(theme, sidebar);

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const createStyles = (theme, sidebar) => {
  const isDark = theme === 'dark';
  const titleColor = sidebar 
    ? '#ffffff' 
    : (isDark ? '#06b6d4' : '#2563eb');
  const borderColor = sidebar 
    ? '#ffffff' 
    : (isDark ? '#06b6d4' : '#2563eb');

  return StyleSheet.create({
    section: {
      marginBottom: 7, // Reduced margin
      pageBreakInside: 'avoid', // Prevent section breaks
    },
    title: {
      fontSize: 8, // Reduced from 9
      fontWeight: 'bold',
      color: titleColor,
      marginBottom: 3, // Reduced margin
      paddingBottom: 2, // Reduced padding
      borderBottom: `1px solid ${borderColor}`, // Thinner border
      textTransform: 'uppercase',
      letterSpacing: 0.3, // Reduced letter spacing
    },
    content: {
      marginTop: 2, // Reduced margin
    },
  });
};

export default CVSection;
