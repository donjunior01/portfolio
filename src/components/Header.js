import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { SPACING, FONTS, SIZES } from '../constants/theme';

const { width } = Dimensions.get('window');

const Header = ({ activeSection, onSectionPress }) => {
  const { colors, isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = width < 768;

  const sections = [
    { id: 'home', label: 'Home', icon: 'home-outline' },
    { id: 'about', label: 'About', icon: 'person-outline' },
    { id: 'projects', label: 'Projects', icon: 'code-slash-outline' },
    { id: 'experience', label: 'Experience', icon: 'briefcase-outline' },
    { id: 'achievements', label: 'Achievements', icon: 'trophy-outline' },
    { id: 'contact', label: 'Contact', icon: 'mail-outline' },
  ];

  const handleSectionPress = (sectionId) => {
    onSectionPress(sectionId);
    setMenuOpen(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
      <View style={styles.content}>
        {/* Logo */}
        <TouchableOpacity
          onPress={() => handleSectionPress('home')}
          style={styles.logo}
        >
          <Text style={[styles.logoText, { color: colors.primary }]}>
            {'<DJ />'}
          </Text>
        </TouchableOpacity>

        {/* Desktop Navigation */}
        {!isMobile && (
          <View style={styles.nav}>
            {sections.map((section) => (
              <TouchableOpacity
                key={section.id}
                onPress={() => handleSectionPress(section.id)}
                style={[
                  styles.navItem,
                  activeSection === section.id && {
                    borderBottomColor: colors.primary,
                    borderBottomWidth: 2,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.navText,
                    { color: activeSection === section.id ? colors.primary : colors.text },
                  ]}
                >
                  {section.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Right Section */}
        <View style={styles.rightSection}>
          {/* Theme Toggle */}
          <TouchableOpacity
            onPress={toggleTheme}
            style={[styles.themeToggle, { backgroundColor: colors.background }]}
          >
            <Ionicons
              name={isDark ? 'sunny' : 'moon'}
              size={20}
              color={colors.text}
            />
          </TouchableOpacity>

          {/* Mobile Menu Button */}
          {isMobile && (
            <TouchableOpacity
              onPress={() => setMenuOpen(!menuOpen)}
              style={[styles.menuButton, { backgroundColor: colors.background }]}
            >
              <Ionicons
                name={menuOpen ? 'close' : 'menu'}
                size={24}
                color={colors.text}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <View style={[styles.mobileMenu, { backgroundColor: colors.surface }]}>
          {sections.map((section) => (
            <TouchableOpacity
              key={section.id}
              onPress={() => handleSectionPress(section.id)}
              style={[
                styles.mobileMenuItem,
                { borderBottomColor: colors.border },
                activeSection === section.id && { backgroundColor: colors.background },
              ]}
            >
              <Ionicons
                name={section.icon}
                size={20}
                color={activeSection === section.id ? colors.primary : colors.textSecondary}
                style={styles.mobileMenuIcon}
              />
              <Text
                style={[
                  styles.mobileMenuText,
                  { color: activeSection === section.id ? colors.primary : colors.text },
                ]}
              >
                {section.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: Platform.OS === 'web' ? 'sticky' : 'relative',
    top: 0,
    zIndex: 1000,
    borderBottomWidth: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    maxWidth: SIZES.width,
    width: '100%',
    alignSelf: 'center',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: FONTS.sizes.xl,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  navItem: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },
  navText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '500',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  themeToggle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileMenu: {
    paddingVertical: SPACING.sm,
  },
  mobileMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderBottomWidth: 1,
  },
  mobileMenuIcon: {
    marginRight: SPACING.md,
  },
  mobileMenuText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '500',
  },
});

export default Header;
