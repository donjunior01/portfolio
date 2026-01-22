import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { SPACING, FONTS } from '../constants/theme';

const { width } = Dimensions.get('window');

const SkillIcon = ({ skill, delay }) => {
  const { colors } = useTheme();
  const translateX = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    const animate = () => {
      translateX.setValue(-100);
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(translateX, {
            toValue: width + 100,
            duration: 15000 + Math.random() * 5000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animate();
  }, []);

  // Map skill names to icons
  const getIcon = (skillName) => {
    const iconMap = {
      // Languages
      'JavaScript': 'logo-javascript',
      'TypeScript': 'logo-javascript',
      'Python': 'logo-python',
      'Java': 'logo-java',
      'C++': 'code-slash',
      'SQL': 'server',
      
      // Frontend
      'React': 'logo-react',
      'React Native': 'logo-react',
      'HTML/CSS': 'logo-html5',
      'Next.js': 'arrow-forward-circle',
      'Tailwind CSS': 'color-palette',
      'Redux': 'repeat',
      
      // Backend
      'Node.js': 'logo-nodejs',
      'Express.js': 'server',
      'Django': 'logo-python',
      'REST APIs': 'cloud-upload',
      'GraphQL': 'git-network',
      
      // Database
      'MongoDB': 'leaf',
      'PostgreSQL': 'server',
      'MySQL': 'server',
      'Firebase': 'flame',
      
      // Tools
      'Git & GitHub': 'logo-github',
      'Docker': 'logo-docker',
      'AWS': 'cloud',
      'Vercel': 'rocket',
      'VS Code': 'code-slash',
      'Postman': 'paper-plane',
      
      // Other
      'Agile/Scrum': 'people',
      'UI/UX Design': 'color-palette',
      'Problem Solving': 'bulb',
      'Team Collaboration': 'people',
    };
    
    return iconMap[skillName] || 'code-working';
  };

  return (
    <Animated.View
      style={[
        styles.skillIcon,
        { 
          backgroundColor: colors.surface,
          transform: [{ translateX }],
        },
      ]}
    >
      <Ionicons name={getIcon(skill.name)} size={32} color={colors.primary} />
      <Text style={[styles.skillName, { color: colors.text }]}>{skill.name}</Text>
      <View style={styles.levelBadge}>
        <Text style={[styles.levelText, { color: colors.primary }]}>
          {skill.level}%
        </Text>
      </View>
    </Animated.View>
  );
};

const MovingSkills = ({ skills }) => {
  const { colors } = useTheme();
  
  // Flatten all skills into one array
  const allSkills = [
    ...(skills.languages || []),
    ...(skills.frontend || []),
    ...(skills.backend || []),
    ...(skills.database || []),
    ...(skills.tools || []),
    ...(skills.other || []),
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.track, { backgroundColor: colors.accentLight }]}>
        {allSkills.map((skill, index) => (
          <SkillIcon
            key={`${skill.name}-${index}`}
            skill={skill}
            delay={index * 800}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    overflow: 'hidden',
    marginVertical: SPACING.xl,
  },
  track: {
    height: '100%',
    position: 'relative',
    borderRadius: 12,
  },
  skillIcon: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: 50,
    gap: SPACING.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    top: '50%',
    marginTop: -28,
  },
  skillName: {
    fontSize: FONTS.sizes.md,
    fontWeight: '600',
  },
  levelBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: 12,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
  },
  levelText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: 'bold',
  },
});

export default MovingSkills;
