import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  Easing,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { SPACING, FONTS, SIZES } from '../constants/theme';
import { EDUCATION, SKILLS, PERSONAL_INFO } from '../../assets/data/portfolioData';
import MovingSkills from './MovingSkills';

const { width } = Dimensions.get('window');

const AnimatedCard = ({ children, delay = 0, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

const InfiniteEducationCarousel = ({ education, colors, shadows }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = useState(0);
  const [shouldLoop, setShouldLoop] = useState(false);

  useEffect(() => {
    if (containerWidth > 0 && education.length > 0) {
      const itemWidth = 380; // Card width + gap
      const totalWidth = education.length * itemWidth;
      
      // Only enable loop if content overflows container
      const needsLoop = totalWidth > containerWidth;
      setShouldLoop(needsLoop);
      
      if (needsLoop) {
        // Reset to 0 then loop infinitely
        scrollX.setValue(0);
        
        const animation = Animated.loop(
          Animated.timing(scrollX, {
            toValue: -totalWidth,
            duration: education.length * 5000, // 5s per card
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          { iterations: -1 } // -1 means infinite loop
        );
        
        animation.start();
        
        return () => {
          animation.stop();
          scrollX.setValue(0);
        };
      }
    }
  }, [containerWidth, education.length]);

  return (
    <View 
      style={styles.carouselContainer}
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <View style={[styles.carouselGradientLeft, Platform.OS === 'web' && { background: `linear-gradient(to right, ${colors.surface}, transparent)` }]} />
      <View style={[styles.carouselGradientRight, Platform.OS === 'web' && { background: `linear-gradient(to left, ${colors.surface}, transparent)` }]} />
      
      <Animated.View
        style={[
          styles.carouselTrack,
          {
            transform: [{ translateX: scrollX }],
          },
        ]}
      >
        {[...education, ...education].map((edu, index) => {
          const eduColors = [
            '#4f46e5', // Indigo
            '#10b981', // Emerald
            '#8b5cf6', // Purple
            '#06b6d4', // Cyan
          ];
          const cardColor = eduColors[index % eduColors.length];
          
          return (
            <View
              key={`edu-${index}`}
              style={[
                styles.eduCard,
                {
                  backgroundColor: colors.cardBg,
                  borderColor: cardColor + '30',
                },
                shadows.medium,
              ]}
            >
              <View style={[styles.eduCardAccent, { backgroundColor: cardColor }]} />
              <View style={styles.eduCardHeader}>
                <View style={[styles.eduIconLarge, { backgroundColor: cardColor + '15' }]}>
                  <Ionicons name="school" size={32} color={cardColor} />
                </View>
                <View style={styles.eduVerifiedBadge}>
                  <Ionicons name="shield-checkmark" size={16} color={cardColor} />
                </View>
              </View>
              <Text style={[styles.eduDegree, { color: colors.text }]} numberOfLines={2}>
                {edu.degree}
              </Text>
              <Text style={[styles.eduInstitution, { color: cardColor }]} numberOfLines={1}>
                {edu.institution}
              </Text>
              <Text style={[styles.eduMeta, { color: colors.textSecondary }]}>
                {edu.startDate} - {edu.endDate}
              </Text>
              {edu.gpa && (
                <View style={[styles.eduGpaBadge, { backgroundColor: cardColor + '20' }]}>
                  <Ionicons name="star" size={14} color={cardColor} />
                  <Text style={[styles.eduGpaText, { color: cardColor }]}>
                    GPA: {edu.gpa}
                  </Text>
                </View>
              )}
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

const InfiniteCategoryCarousel = ({ skills, colors, category }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = useState(0);
  const [shouldLoop, setShouldLoop] = useState(false);

  const getSkillIcon = (skillName) => {
    const iconMap = {
      'Python': 'logo-python',
      'JavaScript': 'logo-javascript',
      'TypeScript': 'logo-react',
      'Java': 'logo-java',
      'C++': 'code-slash',
      'SQL': 'server',
      'HTML/CSS': 'logo-html5',
      'PHP': 'logo-php',
      'React': 'logo-react',
      'React Native': 'logo-react',
      'Vue.js': 'logo-vue',
      'Angular': 'logo-angular',
      'Next.js': 'triangle',
      'Tailwind CSS': 'color-wand',
      'Bootstrap': 'grid',
      'Node.js': 'logo-nodejs',
      'Express': 'server',
      'Django': 'shield-checkmark',
      'Flask': 'flask',
      'Spring Boot': 'leaf',
      'FastAPI': 'flash',
      '.NET': 'logo-microsoft',
      'MongoDB': 'leaf-outline',
      'PostgreSQL': 'server-outline',
      'MySQL': 'server-outline',
      'Firebase': 'flame',
      'Redis': 'flash-outline',
      'Oracle': 'cube-outline',
      'Git': 'git-branch',
      'Docker': 'cube',
      'Kubernetes': 'infinite',
      'AWS': 'cloud',
      'Azure': 'cloud-outline',
      'Jenkins': 'git-compare',
      'VS Code': 'code-slash',
      'REST API': 'swap-horizontal',
      'GraphQL': 'git-network',
      'Agile': 'people',
      'CI/CD': 'git-merge',
    };
    return iconMap[skillName] || 'checkmark-circle';
  };

  useEffect(() => {
    if (containerWidth > 0 && skills.length > 0) {
      const itemWidth = 140;
      const totalWidth = skills.length * itemWidth;
      
      // Check if content overflows container
      const needsLoop = totalWidth > containerWidth;
      setShouldLoop(needsLoop);
      
      // Only animate if content overflows
      if (needsLoop) {
        // Reset to 0 then loop infinitely
        scrollX.setValue(0);
        
        const animation = Animated.loop(
          Animated.timing(scrollX, {
            toValue: -totalWidth,
            duration: skills.length * 3000,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          { iterations: -1 } // -1 means infinite loop
        );
        
        animation.start();
        
        return () => {
          animation.stop();
          scrollX.setValue(0);
        };
      }
    }
  }, [containerWidth, skills.length]);

  return (
    <View 
      style={styles.categoryCarouselContainer}
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <View style={[styles.carouselGradientLeft, Platform.OS === 'web' && { background: `linear-gradient(to right, ${colors.surface}, transparent)` }]} />
      <View style={[styles.carouselGradientRight, Platform.OS === 'web' && { background: `linear-gradient(to left, ${colors.surface}, transparent)` }]} />
      
      <Animated.View
        style={[
          styles.carouselTrack,
          {
            transform: [{ translateX: scrollX }],
          },
        ]}
      >
        {[...skills, ...skills].map((skill, index) => {
          const categoryColors = [
            '#4f46e5', // Indigo
            '#06b6d4', // Cyan
            '#10b981', // Emerald
            '#f59e0b', // Amber
            '#8b5cf6', // Purple
            '#ec4899', // Pink
            '#ef4444', // Red
            '#14b8a6', // Teal
          ];
          const cardColor = categoryColors[index % categoryColors.length];
          
          return (
            <View
              key={`${category}-${index}`}
              style={[
                styles.miniSkillCard,
                {
                  backgroundColor: colors.cardBg,
                  borderColor: cardColor + '30',
                },
              ]}
            >
              <View style={[styles.miniIconWrapper, { backgroundColor: cardColor + '15' }]}>
                <Ionicons name={getSkillIcon(skill.name)} size={24} color={cardColor} />
              </View>
              <Text style={[styles.miniSkillName, { color: colors.text }]} numberOfLines={1}>
                {skill.name}
              </Text>
              <View style={styles.miniLevelContainer}>
                <View style={[styles.miniLevelBar, { backgroundColor: colors.border }]}>
                  <View
                    style={[
                      styles.miniLevelFill,
                      {
                        backgroundColor: cardColor,
                        width: `${skill.level}%`,
                      },
                    ]}
                  />
                </View>
                <Text style={[styles.miniLevelText, { color: cardColor }]}>
                  {skill.level}%
                </Text>
              </View>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

const InfiniteSkillsCarousel = ({ skills, colors }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = useState(0);
  const [shouldLoop, setShouldLoop] = useState(false);

  // #region agent log
  useEffect(() => {
    if (containerWidth > 0) {
      fetch('http://127.0.0.1:7243/ingest/295cb774-e959-4d6b-8ecd-be41df82f8c1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'InfiniteSkillsCarousel:325',message:'Carousel container layout measured',data:{containerWidth,gradientWidthEach:100,totalGradientWidth:200,visibleContentWidth:containerWidth-200,gradientBlocksPercent:((200/containerWidth)*100).toFixed(1),surfaceColor:colors.surface},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
    }
  }, [containerWidth, colors.surface]);
  // #endregion
  
  // Flatten all skills into single array
  const allSkills = [
    ...skills.languages,
    ...skills.frontend,
    ...skills.backend,
    ...skills.database,
    ...skills.tools,
    ...skills.other,
  ];

  const getSkillIcon = (skillName) => {
    const iconMap = {
      'Python': 'logo-python',
      'JavaScript': 'logo-javascript',
      'TypeScript': 'logo-react',
      'Java': 'logo-java',
      'C++': 'code-slash',
      'SQL': 'server',
      'HTML/CSS': 'logo-html5',
      'PHP': 'logo-php',
      'React': 'logo-react',
      'React Native': 'logo-react',
      'Vue.js': 'logo-vue',
      'Angular': 'logo-angular',
      'Next.js': 'triangle',
      'Tailwind CSS': 'color-wand',
      'Bootstrap': 'grid',
      'Node.js': 'logo-nodejs',
      'Express': 'server',
      'Django': 'shield-checkmark',
      'Flask': 'flask',
      'Spring Boot': 'leaf',
      'FastAPI': 'flash',
      '.NET': 'logo-microsoft',
      'MongoDB': 'leaf-outline',
      'PostgreSQL': 'server-outline',
      'MySQL': 'server-outline',
      'Firebase': 'flame',
      'Redis': 'flash-outline',
      'Oracle': 'cube-outline',
      'Git': 'git-branch',
      'Docker': 'cube',
      'Kubernetes': 'infinite',
      'AWS': 'cloud',
      'Azure': 'cloud-outline',
      'Jenkins': 'git-compare',
      'VS Code': 'code-slash',
      'REST API': 'swap-horizontal',
      'GraphQL': 'git-network',
      'Agile': 'people',
      'CI/CD': 'git-merge',
    };
    return iconMap[skillName] || 'checkmark-circle';
  };

  useEffect(() => {
    if (containerWidth > 0 && allSkills.length > 0) {
      const itemWidth = 140; // Card width + gap
      const totalWidth = allSkills.length * itemWidth;
      
      // Check if content overflows container
      const needsLoop = totalWidth > containerWidth;
      setShouldLoop(needsLoop);
      
      // Only animate if content overflows
      if (needsLoop) {
        // Reset to 0 then loop infinitely
        scrollX.setValue(0);
        
        const animation = Animated.loop(
          Animated.timing(scrollX, {
            toValue: -totalWidth,
            duration: allSkills.length * 3000, // Smooth, slower scroll
            useNativeDriver: true,
            easing: Easing.linear, // Linear for seamless loop
          }),
          { iterations: -1 } // -1 means infinite loop
        );
        
        animation.start();
        
        return () => {
          animation.stop();
          scrollX.setValue(0);
        };
      }
    }
  }, [containerWidth, allSkills.length]);

  const renderSkillCard = (skill, index) => {
    const colors_gradient = [
      '#4f46e5', // Indigo
      '#06b6d4', // Cyan
      '#10b981', // Emerald
      '#f59e0b', // Amber
      '#8b5cf6', // Purple
      '#ec4899', // Pink
      '#ef4444', // Red
      '#14b8a6', // Teal
      '#f97316', // Orange
      '#6366f1', // Violet
    ];
    const cardColor = colors_gradient[index % colors_gradient.length];

    return (
      <View
        key={`skill-${index}`}
        style={[
          styles.carouselCard,
          {
            backgroundColor: colors.cardBg,
            borderColor: cardColor + '30',
          },
        ]}
      >
        <View style={[styles.carouselIconWrapper, { backgroundColor: cardColor + '15' }]}>
          <Ionicons name={getSkillIcon(skill.name)} size={32} color={cardColor} />
        </View>
        <Text style={[styles.carouselSkillName, { color: colors.text }]} numberOfLines={1}>
          {skill.name}
        </Text>
        <View style={styles.carouselLevelContainer}>
          <View style={[styles.carouselLevelBar, { backgroundColor: colors.border }]}>
            <View
              style={[
                styles.carouselLevelFill,
                {
                  backgroundColor: cardColor,
                  width: `${skill.level}%`,
                },
              ]}
            />
          </View>
          <Text style={[styles.carouselLevelText, { color: cardColor }]}>
            {skill.level}%
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View 
      style={styles.carouselContainer}
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <View style={[styles.carouselGradientLeft, Platform.OS === 'web' && { background: `linear-gradient(to right, ${colors.surface}, transparent)` }]} />
      <View style={[styles.carouselGradientRight, Platform.OS === 'web' && { background: `linear-gradient(to left, ${colors.surface}, transparent)` }]} />
      
      <Animated.View
        style={[
          styles.carouselTrack,
          {
            transform: [{ translateX: scrollX }],
          },
        ]}
      >
        {/* Render skills twice for seamless loop */}
        {[...allSkills, ...allSkills].map((skill, index) => renderSkillCard(skill, index))}
      </Animated.View>
    </View>
  );
};

const About = () => {
  const { colors, shadows } = useTheme();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7243/ingest/295cb774-e959-4d6b-8ecd-be41df82f8c1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'About.js:494',message:'About component mounted - screen dimensions',data:{screenWidth:width,isMobile,isTablet,gradientWidth:100,gradientCoveragePercent:((100/width)*100).toFixed(1),platform:Platform.OS},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,B'})}).catch(()=>{});
  }, []);
  // #endregion

  // Technology icon mapping
  const getSkillIcon = (skillName) => {
    const iconMap = {
      // Languages
      'Python': 'logo-python',
      'JavaScript': 'logo-javascript',
      'TypeScript': 'logo-react',
      'Java': 'logo-java',
      'C++': 'code-slash',
      'SQL': 'server',
      'HTML/CSS': 'logo-html5',
      'PHP': 'logo-php',
      // Frontend
      'React': 'logo-react',
      'React Native': 'logo-react',
      'Vue.js': 'logo-vue',
      'Angular': 'logo-angular',
      'Next.js': 'triangle',
      'Tailwind CSS': 'color-wand',
      'Bootstrap': 'grid',
      // Backend
      'Node.js': 'logo-nodejs',
      'Express': 'server',
      'Django': 'shield-checkmark',
      'Flask': 'flask',
      'Spring Boot': 'leaf',
      'FastAPI': 'flash',
      '.NET': 'logo-microsoft',
      // Database
      'MongoDB': 'leaf-outline',
      'PostgreSQL': 'server-outline',
      'MySQL': 'server-outline',
      'Firebase': 'flame',
      'Redis': 'flash-outline',
      'Oracle': 'cube-outline',
      // Tools
      'Git': 'git-branch',
      'Docker': 'cube',
      'Kubernetes': 'infinite',
      'AWS': 'cloud',
      'Azure': 'cloud-outline',
      'Jenkins': 'git-compare',
      'VS Code': 'code-slash',
      // Other
      'REST API': 'swap-horizontal',
      'GraphQL': 'git-network',
      'Agile': 'people',
      'CI/CD': 'git-merge',
    };
    return iconMap[skillName] || 'checkmark-circle';
  };

  const SkillBar = ({ skill, delay = 0 }) => {
    const progressAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.95)).current;
    const glowAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          delay,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          delay,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
        Animated.timing(progressAnim, {
          toValue: skill.level,
          duration: 1200,
          delay: delay + 300,
          useNativeDriver: false,
        }),
      ]).start();

      // Continuous glow pulse animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(glowAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(glowAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, []);

    const progressWidth = progressAnim.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    });

    const glowOpacity = glowAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 0.8],
    });

    return (
      <Animated.View 
        style={[
          styles.skillItem, 
          { 
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          }
        ]}
      >
        <View style={styles.skillHeader}>
          <View style={styles.skillNameContainer}>
            <View style={[styles.skillIconBadge, { backgroundColor: colors.primary + '10' }]}>
              <Ionicons name={getSkillIcon(skill.name)} size={18} color={colors.primary} />
            </View>
            <Text style={[styles.skillName, { color: colors.text }]}>
              {skill.name}
            </Text>
          </View>
          <View style={[styles.skillLevelBadge, { backgroundColor: colors.primary + '15' }]}>
            <Ionicons name="trending-up" size={12} color={colors.primary} />
            <Text style={[styles.skillLevelText, { color: colors.primary }]}>
              {skill.level}%
            </Text>
          </View>
        </View>
        <View style={[styles.skillBarBg, { backgroundColor: colors.border }]}>
          <Animated.View
            style={[
              styles.skillBarFill,
              { 
                backgroundColor: colors.primary,
                width: progressWidth,
                opacity: glowOpacity,
              },
            ]}
          >
            <View style={[styles.skillBarShine, { backgroundColor: 'rgba(255,255,255,0.3)' }]} />
          </Animated.View>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <View style={styles.content}>
        {/* Header */}
        <AnimatedCard delay={0}>
          <View style={styles.header}>
            <View style={styles.headerIconWrapper}>
              <Ionicons name="person-circle-outline" size={48} color={colors.primary} />
            </View>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              About Me
            </Text>
            <Text style={[styles.sectionSubtitle, { color: colors.textSecondary }]}>
              Education, Skills & Background
            </Text>
          </View>
        </AnimatedCard>

        {/* Education Section */}
        <View style={styles.section}>
          <AnimatedCard delay={100}>
            <View style={styles.sectionHeader}>
              <View style={[styles.iconWrapper, { backgroundColor: colors.primary + '15' }]}>
                <Ionicons name="school-outline" size={24} color={colors.primary} />
              </View>
              <View style={styles.sectionTitleContainer}>
                <Text style={[styles.subsectionTitle, { color: colors.text }]}>
                  Education
                </Text>
                <Text style={[styles.sectionCount, { color: colors.textSecondary }]}>
                  {EDUCATION.length} institutions
                </Text>
              </View>
            </View>
          </AnimatedCard>

          <InfiniteEducationCarousel education={EDUCATION} colors={colors} shadows={shadows} />
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <AnimatedCard delay={400}>
            <View style={styles.sectionHeader}>
              <View style={[styles.iconWrapper, { backgroundColor: colors.primary + '15' }]}>
                <Ionicons name="code-slash-outline" size={24} color={colors.primary} />
              </View>
              <View style={styles.sectionTitleContainer}>
                <Text style={[styles.subsectionTitle, { color: colors.text }]}>
                  Technical Skills
                </Text>
                <Text style={[styles.sectionCount, { color: colors.textSecondary }]}>
                  {Object.values(SKILLS).flat().length} technologies
                </Text>
              </View>
            </View>
          </AnimatedCard>

          {/* Enhanced Infinite Scrolling Skills Showcase */}
          <AnimatedCard delay={500}>
            <View style={styles.skillsShowcase}>
              <Text style={[styles.showcaseTitle, { color: colors.text }]}>
                Technology Stack
              </Text>
              <Text style={[styles.showcaseSubtitle, { color: colors.textSecondary }]}>
                Expertise across modern frameworks & tools
              </Text>
              <InfiniteSkillsCarousel skills={SKILLS} colors={colors} />
            </View>
          </AnimatedCard>

          {/* Category-wise Skill Carousels */}
          {Object.entries(SKILLS).map(([category, categorySkills], catIndex) => {
            const categoryIcons = {
              languages: { icon: 'code-working-outline', label: 'Programming Languages', badge: 'Core' },
              frontend: { icon: 'desktop-outline', label: 'Frontend Development', badge: 'UI/UX' },
              backend: { icon: 'server-outline', label: 'Backend Development', badge: 'Server' },
              database: { icon: 'documents-outline', label: 'Database Systems', badge: 'Data' },
              tools: { icon: 'build-outline', label: 'Tools & Platforms', badge: 'DevOps' },
              other: { icon: 'star-outline', label: 'Other Skills', badge: 'Plus' },
            };

            const config = categoryIcons[category];
            if (!config || categorySkills.length === 0) return null;

            return (
              <AnimatedCard key={category} delay={600 + catIndex * 50} style={{ marginBottom: SPACING.xl }}>
                <View style={styles.categorySection}>
                  <View style={styles.categoryHeader}>
                    <View style={[styles.categoryIconWrapper, { backgroundColor: colors.primary + '15' }]}>
                      <Ionicons name={config.icon} size={20} color={colors.primary} />
                    </View>
                    <View style={styles.categoryTitleContainer}>
                      <Text style={[styles.categoryTitle, { color: colors.text }]}>
                        {config.label}
                      </Text>
                      <Text style={[styles.categorySubtitle, { color: colors.textSecondary }]}>
                        {categorySkills.length} skills
                      </Text>
                    </View>
                    <View style={[styles.categoryBadge, { backgroundColor: colors.primary + '20' }]}>
                      <Text style={[styles.categoryBadgeText, { color: colors.primary }]}>
                        {config.badge}
                      </Text>
                    </View>
                  </View>
                  <InfiniteCategoryCarousel 
                    skills={categorySkills} 
                    colors={colors}
                    category={category}
                  />
                </View>
              </AnimatedCard>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width < 768 ? SPACING.md : SPACING.lg,
    paddingVertical: SPACING.xxl * 2,
  },
  content: {
    maxWidth: SIZES.width,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    marginBottom: SPACING.xxl,
    alignItems: 'center',
  },
  headerIconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: width < 768 ? FONTS.sizes.xxl : FONTS.sizes.xxxl,
    fontWeight: '700',
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: width < 768 ? FONTS.sizes.sm : FONTS.sizes.md,
    textAlign: 'center',
    lineHeight: 24,
  },
  section: {
    marginBottom: SPACING.xxl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subsectionTitle: {
    fontSize: width < 768 ? FONTS.sizes.lg : FONTS.sizes.xl,
    fontWeight: '700',
  },
  card: {
    padding: width < 768 ? SPACING.md : SPACING.lg,
    borderRadius: 16,
    marginBottom: SPACING.lg,
    overflow: 'hidden',
    position: 'relative',
    ...(Platform.OS === 'web' && {
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }),
  },
  cardAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 4,
    height: '100%',
  },
  cardHover: Platform.OS === 'web' ? {
    ':hover': {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    },
  } : {},
  degreeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    marginBottom: SPACING.xs,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  educationHeader: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.md,
  },
  educationIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  degree: {
    fontSize: width < 768 ? FONTS.sizes.md : FONTS.sizes.lg,
    fontWeight: '700',
    marginBottom: SPACING.xs,
    lineHeight: width < 768 ? 20 : 24,
  },
  institution: {
    fontSize: FONTS.sizes.md,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  educationMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  metaText: {
    fontSize: FONTS.sizes.sm,
  },
  subsection: {
    marginTop: SPACING.md,
  },
  subsectionLabel: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '600',
    marginBottom: SPACING.sm,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.xs,
    marginTop: SPACING.xs,
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: SPACING.sm,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(79, 70, 229, 0.2)',
  },
  tagText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '500',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.xs,
  },
  listText: {
    fontSize: FONTS.sizes.sm,
    flex: 1,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.lg,
  },
  skillCardWrapper: {
    width: width < 768 ? '100%' : width < 1024 ? 'calc(50% - 12px)' : 'calc(33.333% - 16px)',
  },
  skillCard: {
    padding: width < 768 ? SPACING.md : SPACING.lg,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    ...(Platform.OS === 'web' && {
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }),
  },
  skillCardGradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
  },
  skillCardHover: Platform.OS === 'web' ? {
    ':hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 16px 32px rgba(0,0,0,0.12)',
    },
  } : {},
  skillCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.lg,
  },
  skillIconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillTitleContainer: {
    flex: 1,
  },
  skillCardTitle: {
    fontSize: width < 768 ? FONTS.sizes.md : FONTS.sizes.lg,
    fontWeight: '700',
    marginBottom: 2,
  },
  skillCardSubtitle: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '500',
  },
  skillBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  skillBadgeText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  skillItem: {
    marginBottom: SPACING.md,
    ...(Platform.OS === 'web' && {
      transition: 'all 0.2s ease',
    }),
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  skillNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    flex: 1,
  },
  skillIconBadge: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillName: {
    fontSize: width < 768 ? FONTS.sizes.xs : FONTS.sizes.sm,
    fontWeight: '600',
  },
  skillLevelBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 8,
  },
  skillLevelText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '600',
  },
  skillBarBg: {
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  skillBarFill: {
    height: '100%',
    borderRadius: 5,
    position: 'relative',
    overflow: 'hidden',
    ...(Platform.OS === 'web' && {
      boxShadow: '0 2px 12px rgba(79, 70, 229, 0.4)',
    }),
  },
  skillBarShine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    borderRadius: 5,
  },
  // Infinite Skills Carousel Styles
  skillsShowcase: {
    marginBottom: SPACING.xxl,
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: SIZES.width,
    alignSelf: 'center',
  },
  showcaseTitle: {
    fontSize: width < 768 ? FONTS.sizes.lg : FONTS.sizes.xl,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  showcaseSubtitle: {
    fontSize: FONTS.sizes.sm,
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  carouselContainer: {
    position: 'relative',
    overflow: 'hidden',
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    maxWidth: SIZES.width - (SPACING.md * 2),
  },
  carouselTrack: {
    flexDirection: 'row',
    gap: SPACING.md,
    alignItems: 'center',
  },
  carouselCard: {
    width: 130,
    padding: SPACING.md,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    ...(Platform.OS === 'web' && {
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    }),
  },
  carouselIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
  },
  carouselSkillName: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: SPACING.sm,
    height: 20,
  },
  carouselLevelContainer: {
    width: '100%',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  carouselLevelBar: {
    width: '100%',
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  carouselLevelFill: {
    height: '100%',
    borderRadius: 3,
  },
  carouselLevelText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '700',
  },
  carouselGradientLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: width < 768 ? 40 : 80,
    zIndex: 10,
    pointerEvents: 'none',
  },
  carouselGradientRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: width < 768 ? 40 : 80,
    zIndex: 10,
    pointerEvents: 'none',
  },
  // Section Header Enhancements
  sectionTitleContainer: {
    flex: 1,
  },
  sectionCount: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '500',
    marginTop: 2,
  },
  // Education Carousel Styles
  eduCard: {
    width: 360,
    padding: SPACING.lg,
    borderRadius: 16,
    borderWidth: 2,
    marginRight: SPACING.md,
    position: 'relative',
    overflow: 'hidden',
  },
  eduCardAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 4,
    height: '100%',
  },
  eduCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  eduIconLarge: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eduVerifiedBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
  },
  eduDegree: {
    fontSize: FONTS.sizes.md,
    fontWeight: '700',
    marginBottom: SPACING.xs,
    lineHeight: 22,
  },
  eduInstitution: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  eduMeta: {
    fontSize: FONTS.sizes.xs,
    marginBottom: SPACING.sm,
  },
  eduGpaBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  eduGpaText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '700',
  },
  // Category Section Styles
  categorySection: {
    marginBottom: SPACING.lg,
    paddingHorizontal: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: SIZES.width,
    alignSelf: 'center',
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.sm,
  },
  categoryIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTitleContainer: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: FONTS.sizes.md,
    fontWeight: '700',
  },
  categorySubtitle: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '500',
    marginTop: 2,
  },
  categoryBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 10,
  },
  categoryBadgeText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  categoryCarouselContainer: {
    position: 'relative',
    overflow: 'hidden',
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    maxWidth: SIZES.width - (SPACING.md * 2),
  },
  // Mini Skill Card Styles
  miniSkillCard: {
    width: 130,
    padding: SPACING.sm,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    marginRight: SPACING.xs,
  },
  miniIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.xs,
  },
  miniSkillName: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: SPACING.xs,
    height: 16,
  },
  miniLevelContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 4,
  },
  miniLevelBar: {
    width: '100%',
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  miniLevelFill: {
    height: '100%',
    borderRadius: 2,
  },
  miniLevelText: {
    fontSize: 10,
    fontWeight: '700',
  },
});

export default About;
