import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { SPACING, FONTS, SIZES } from '../constants/theme';
import { PERSONAL_INFO } from '../../assets/data/portfolioData';

const { width } = Dimensions.get('window');

const SimpleHeader = ({ navigation, currentRoute }) => {
  const { colors, isDark, toggleTheme, shadows } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const sections = [
    { name: 'Home', icon: 'home-outline', route: 'Home' },
    { name: 'About', icon: 'person-outline', route: 'About' },
    { name: 'Projects', icon: 'briefcase-outline', route: 'Projects' },
    { name: 'Experience', icon: 'business-outline', route: 'Experience' },
    { name: 'Achievements', icon: 'trophy-outline', route: 'Achievements' },
    { name: 'Contact', icon: 'mail-outline', route: 'Contact' },
  ];

  const handleNavigate = (route) => {
    setMenuOpen(false);
    if (currentRoute !== route) {
      navigation.navigate(route);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      {/* Backdrop blur effect simulation */}
      <View style={[styles.backdrop, { backgroundColor: colors.surface + 'F5' }]} />
      
      <View style={[styles.content, isTablet && styles.contentTablet]}>
        {/* Logo with gradient effect */}
        <TouchableOpacity 
          onPress={() => handleNavigate('Home')} 
          style={styles.logoContainer}
          activeOpacity={0.7}
        >
          <View style={[styles.logoIconWrapper, { backgroundColor: colors.primary + '15' }]}>
            <Ionicons name="code-slash" size={24} color={colors.primary} />
          </View>
          <View style={styles.logoTextContainer}>
            <Text style={[styles.logoText, { color: colors.text }]}>
              {PERSONAL_INFO.shortName}
            </Text>
            <Text style={[styles.logoSubtext, { color: colors.textSecondary }]}>
              Portfolio
            </Text>
          </View>
        </TouchableOpacity>

        {/* Desktop Navigation */}
        {!isMobile && (
          <View style={styles.nav}>
            {sections.map((section, index) => {
              const isActive = currentRoute === section.route;
              const isHovered = hoveredItem === section.route;
              
              return (
                <TouchableOpacity
                  key={section.route}
                  onPress={() => handleNavigate(section.route)}
                  onMouseEnter={() => Platform.OS === 'web' && setHoveredItem(section.route)}
                  onMouseLeave={() => Platform.OS === 'web' && setHoveredItem(null)}
                  style={[
                    styles.navItem,
                    isActive && [styles.navItemActive, { backgroundColor: colors.primary + '15' }],
                    isHovered && !isActive && [styles.navItemHover, { backgroundColor: colors.surface }],
                  ]}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={isActive ? section.icon.replace('-outline', '') : section.icon}
                    size={18}
                    color={isActive ? colors.primary : colors.textSecondary}
                    style={styles.navIcon}
                  />
                  <Text
                    style={[
                      styles.navText,
                      { color: isActive ? colors.primary : colors.text },
                      isActive && styles.navTextActive,
                    ]}
                  >
                    {section.name}
                  </Text>
                  {isActive && (
                    <View style={[styles.activeIndicator, { backgroundColor: colors.primary }]} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actions}>
          {/* Theme Toggle Button */}
          <TouchableOpacity 
            onPress={toggleTheme} 
            style={[styles.actionButton, { backgroundColor: colors.surface }]}
            activeOpacity={0.7}
          >
            <View style={[styles.actionButtonInner, { backgroundColor: colors.background }]}>
              <Ionicons
                name={isDark ? 'sunny' : 'moon'}
                size={20}
                color={colors.primary}
              />
            </View>
          </TouchableOpacity>

          {/* CTA Button - Desktop only */}
          {!isMobile && !isTablet && (
            <TouchableOpacity
              onPress={() => handleNavigate('Contact')}
              style={[styles.ctaButton, { backgroundColor: colors.primary }]}
              activeOpacity={0.8}
            >
              <Text style={styles.ctaButtonText}>Hire Me</Text>
              <Ionicons name="arrow-forward" size={16} color="#ffffff" />
            </TouchableOpacity>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <TouchableOpacity
              onPress={() => setMenuOpen(!menuOpen)}
              style={[styles.actionButton, { backgroundColor: colors.surface }]}
              activeOpacity={0.7}
            >
              <View style={[styles.actionButtonInner, { backgroundColor: colors.background }]}>
                <Ionicons
                  name={menuOpen ? 'close' : 'menu'}
                  size={24}
                  color={colors.primary}
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Enhanced Mobile Menu */}
      {isMobile && menuOpen && (
        <View style={[styles.mobileMenu, { backgroundColor: colors.surface }]}>
          <View style={styles.mobileMenuContent}>
            {sections.map((section, index) => {
              const isActive = currentRoute === section.route;
              
              return (
                <TouchableOpacity
                  key={section.route}
                  onPress={() => handleNavigate(section.route)}
                  style={[
                    styles.mobileMenuItem,
                    isActive && [styles.mobileMenuItemActive, { backgroundColor: colors.primary + '15' }],
                  ]}
                  activeOpacity={0.7}
                >
                  <View style={[styles.mobileMenuIconWrapper, isActive && { backgroundColor: colors.primary + '20' }]}>
                    <Ionicons
                      name={isActive ? section.icon.replace('-outline', '') : section.icon}
                      size={22}
                      color={isActive ? colors.primary : colors.textSecondary}
                    />
                  </View>
                  <View style={styles.mobileMenuTextContainer}>
                    <Text
                      style={[
                        styles.mobileMenuText,
                        { color: isActive ? colors.primary : colors.text },
                        isActive && styles.mobileMenuTextActive,
                      ]}
                    >
                      {section.name}
                    </Text>
                    {isActive && (
                      <Text style={[styles.mobileMenuSubtext, { color: colors.primary + '80' }]}>
                        Current page
                      </Text>
                    )}
                  </View>
                  {isActive && (
                    <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
                  )}
                </TouchableOpacity>
              );
            })}
            
            {/* Mobile CTA Button */}
            <TouchableOpacity
              onPress={() => handleNavigate('Contact')}
              style={[styles.mobileCTA, { backgroundColor: colors.primary }]}
              activeOpacity={0.8}
            >
              <Ionicons name="mail" size={20} color="#ffffff" />
              <Text style={styles.mobileCTAText}>Get In Touch</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
    ...Platform.select({
      web: {
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      },
    }),
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    ...Platform.select({
      web: {
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
      },
    }),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.lg,
    maxWidth: 1400,
    width: '100%',
    alignSelf: 'center',
  },
  contentTablet: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  logoIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTextContainer: {
    justifyContent: 'center',
  },
  logoText: {
    fontSize: FONTS.sizes.lg,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  logoSubtext: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '500',
    marginTop: -2,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: 8,
    position: 'relative',
    transition: 'all 0.2s ease',
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },
  navItemActive: {
    borderRadius: 10,
  },
  navItemHover: {
    borderRadius: 10,
    ...Platform.select({
      web: {
        transform: [{ translateY: -1 }],
      },
    }),
  },
  navIcon: {
    marginRight: 2,
  },
  navText: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  navTextActive: {
    fontWeight: '700',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: SPACING.md,
    right: SPACING.md,
    height: 2,
    borderRadius: 2,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  actionButton: {
    borderRadius: 10,
    padding: 2,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
      },
    }),
  },
  actionButtonInner: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 10,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)',
        transition: 'all 0.2s ease',
      },
      default: {
        shadowColor: '#4f46e5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
      },
    }),
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: FONTS.sizes.sm,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  mobileMenu: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.05)',
  },
  mobileMenuContent: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.sm,
    gap: SPACING.xs,
  },
  mobileMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    gap: SPACING.md,
    borderRadius: 12,
    marginBottom: SPACING.xs,
  },
  mobileMenuItemActive: {
    borderRadius: 12,
  },
  mobileMenuIconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },
  mobileMenuTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  mobileMenuText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  mobileMenuTextActive: {
    fontWeight: '700',
  },
  mobileMenuSubtext: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '500',
    marginTop: 2,
    letterSpacing: 0.3,
  },
  mobileCTA: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: 12,
    marginTop: SPACING.md,
    ...Platform.select({
      default: {
        shadowColor: '#4f46e5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
      },
    }),
  },
  mobileCTAText: {
    color: '#ffffff',
    fontSize: FONTS.sizes.md,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});

export default SimpleHeader;
