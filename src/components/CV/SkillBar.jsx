import { View, Text, StyleSheet } from '@react-pdf/renderer';

const SkillBar = ({ skill, theme }) => {
  const styles = createStyles(theme);
  const percentage = skill.level;

  return (
    <View style={styles.skillItem}>
      <View style={styles.skillHeader}>
        <Text style={styles.skillName}>{skill.name}</Text>
        <Text style={styles.skillLevel}>{percentage}%</Text>
      </View>
      <View style={styles.barContainer}>
        <View style={[styles.barFill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
};

const createStyles = (theme) => {
  const isDark = theme === 'dark';
  const textColor = '#ffffff';
  const barBg = 'rgba(255, 255, 255, 0.2)';
  const barFill = isDark ? '#06b6d4' : '#60a5fa';

  return StyleSheet.create({
    skillItem: {
      marginBottom: 3, // Reduced margin
    },
    skillHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 1, // Reduced margin
    },
    skillName: {
      fontSize: 6.5, // Further reduced
      color: textColor,
    },
    skillLevel: {
      fontSize: 5.5, // Further reduced
      color: '#cbd5e1',
    },
    barContainer: {
      height: 3, // Reduced height
      backgroundColor: barBg,
      borderRadius: 1.5,
      overflow: 'hidden',
    },
    barFill: {
      height: '100%',
      backgroundColor: barFill,
      borderRadius: 1.5,
    },
  });
};

export default SkillBar;
