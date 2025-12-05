import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { SPACING, FONTS, SIZES } from '../constants/theme';
import { PERSONAL_INFO } from '../../assets/data/portfolioData';

const { width } = Dimensions.get('window');

const Hero = ({ navigation }) => {
  const { colors } = useTheme();
  const isMobile = width < 768;

  const openLink = (url) => {
    if (Platform.OS === 'web') {
      window.open(url, '_blank');
    }
  };

  const handleContactPress = () => {
    if (navigation) {
      navigation.navigate('Contact');
    }
  };

  const handleProjectsPress = () => {
    if (navigation) {
      navigation.navigate('Projects');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        {/* Main Content */}
        <View style={styles.textContent}>
          <Text style={[styles.greeting, { color: colors.primary }]}>
            Hi, I'm
          </Text>
          
          <Text style={[styles.name, { color: colors.text }]}>
            {PERSONAL_INFO.name}
          </Text>
          
          <Text style={[styles.title, { color: colors.textSecondary }]}>
            {PERSONAL_INFO.title}
          </Text>
          
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {PERSONAL_INFO.subtitle}
          </Text>
          
          <Text style={[styles.bio, { color: colors.textSecondary }]}>
            {PERSONAL_INFO.bio}
          </Text>

          {/* CTA Buttons */}
          <View style={styles.ctaContainer}>
            <TouchableOpacity
              onPress={handleContactPress}
              style={[styles.primaryButton, { backgroundColor: colors.primary }]}
              activeOpacity={0.85}
            >
              <Ionicons name="mail" size={20} color="#ffffff" />
              <Text style={styles.primaryButtonText}>Get In Touch</Text>
              <View style={styles.buttonArrow}>
                <Ionicons name="arrow-forward" size={18} color="#ffffff" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleProjectsPress}
              style={[styles.secondaryButton, { borderColor: colors.primary, backgroundColor: colors.primary + '10' }]}
              activeOpacity={0.8}
            >
              <Ionicons name="briefcase-outline" size={20} color={colors.primary} />
              <Text style={[styles.secondaryButtonText, { color: colors.primary }]}>
                View Projects
              </Text>
            </TouchableOpacity>
          </View>

          {/* Social Links */}
          <View style={styles.socialContainer}>
            {[
              { icon: 'logo-github', url: PERSONAL_INFO.github },
              { icon: 'logo-linkedin', url: PERSONAL_INFO.linkedin },
              { icon: 'mail-outline', url: `mailto:${PERSONAL_INFO.email}` },
            ].map((social, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openLink(social.url)}
                style={[styles.socialButton, { backgroundColor: colors.surface }]}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={social.icon}
                  size={22}
                  color={colors.primary}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Decorative Elements */}
        <View style={styles.decorativeContainer}>
          <LinearGradient
            colors={[colors.gradient1, colors.gradient2]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientCircle}
          />
          <View style={[styles.circle, { backgroundColor: colors.primary, opacity: 0.1 }]} />
          <View style={[styles.circle2, { backgroundColor: colors.secondary, opacity: 0.1 }]} />
        </View>
      </View>

      {/* Scroll Indicator */}
      <View style={styles.scrollIndicator}>
        <Ionicons name="chevron-down" size={24} color={colors.textSecondary} />
        <Text style={[styles.scrollText, { color: colors.textSecondary }]}>
          Scroll to explore
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Platform.OS === 'web' ? '100vh' : Dimensions.get('window').height - 100,
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xxl,
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    maxWidth: SIZES.width,
    width: '100%',
    alignSelf: 'center',
    zIndex: 1,
  },
  textContent: {
    maxWidth: 800,
  },
  greeting: {
    fontSize: FONTS.sizes.xl,
    fontWeight: '500',
    marginBottom: SPACING.sm,
  },
  name: {
    fontSize: width < 768 ? FONTS.sizes.xxxl : 56,
    fontWeight: 'bold',
    marginBottom: SPACING.md,
    lineHeight: width < 768 ? FONTS.sizes.xxxl + 8 : 64,
  },
  title: {
    fontSize: FONTS.sizes.xl,
    fontWeight: '600',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: FONTS.sizes.lg,
    marginBottom: SPACING.lg,
  },
  bio: {
    fontSize: FONTS.sizes.md,
    lineHeight: FONTS.sizes.md * 1.6,
    marginBottom: SPACING.xl,
  },
  ctaContainer: {
    flexDirection: width < 768 ? 'column' : 'row',
    gap: SPACING.md,
    marginBottom: SPACING.xl,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.md + 4,
    paddingHorizontal: SPACING.xl + SPACING.sm,
    borderRadius: 12,
    gap: SPACING.sm,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        boxShadow: '0 8px 24px rgba(79, 70, 229, 0.4)',
        transition: 'all 0.3s ease',
      },
      default: {
        shadowColor: '#4f46e5',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 16,
        elevation: 8,
      },
    }),
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: FONTS.sizes.md,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  buttonArrow: {
    marginLeft: SPACING.xs,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.md + 4,
    paddingHorizontal: SPACING.xl + SPACING.sm,
    borderRadius: 12,
    borderWidth: 2,
    gap: SPACING.sm,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      },
    }),
  },
  secondaryButtonText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  socialContainer: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  socialButton: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
      },
    }),
  },
  decorativeContainer: {
    position: 'absolute',
    right: -100,
    top: '20%',
    opacity: 0.5,
  },
  gradientCircle: {
    width: 400,
    height: 400,
    borderRadius: 200,
    opacity: 0.3,
  },
  circle: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    top: 100,
    right: 50,
  },
  circle2: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    bottom: 0,
    right: 200,
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: SPACING.xl,
    left: 0,
    right: 0,
    alignItems: 'center',
    gap: SPACING.xs,
  },
  scrollText: {
    fontSize: FONTS.sizes.sm,
  },
});

export default Hero;
