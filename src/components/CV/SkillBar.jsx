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
      marginBottom: 5,
    },
    skillHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 2,
    },
    skillName: {
      fontSize: 8,
      color: textColor,
    },
    skillLevel: {
      fontSize: 7,
      color: '#cbd5e1',
    },
    barContainer: {
      height: 4,
      backgroundColor: barBg,
      borderRadius: 2,
      overflow: 'hidden',
    },
    barFill: {
      height: '100%',
      backgroundColor: barFill,
      borderRadius: 2,
    },
  });
};

export default SkillBar;
