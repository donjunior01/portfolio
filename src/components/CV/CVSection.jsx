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
      marginBottom: 6,
    },
    title: {
      fontSize: 11,
      fontWeight: 'bold',
      color: titleColor,
      marginBottom: 3,
      paddingBottom: 2,
      borderBottom: `1.5px solid ${borderColor}`,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    content: {
      marginTop: 2,
    },
  });
};

export default CVSection;
