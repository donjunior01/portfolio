import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { SPACING, FONTS, SIZES } from '../constants/theme';
import { ACHIEVEMENTS } from '../../assets/data/portfolioData';

const { width } = Dimensions.get('window');

const Achievements = () => {
  const { colors, shadows } = useTheme();
  const [filter, setFilter] = useState('all');
  const isMobile = width < 768;

  const categories = [
    { id: 'all', label: 'All', icon: 'star' },
    { id: 'competition', label: 'Competitions', icon: 'trophy' },
    { id: 'academic', label: 'Academic', icon: 'school' },
    { id: 'contribution', label: 'Contributions', icon: 'git-branch' },
  ];

  const filteredAchievements = filter === 'all'
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter(a => a.category === filter);

  const AchievementCard = ({ achievement }) => (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.cardBg },
        shadows.medium,
      ]}
    >
      <View style={[styles.iconContainer, { backgroundColor: colors.surface }]}>
        <Text style={styles.emoji}>{achievement.icon}</Text>
      </View>
      
      <View style={styles.cardContent}>
        <Text style={[styles.title, { color: colors.text }]}>
          {achievement.title}
        </Text>
        
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {achievement.description}
        </Text>
        
        <View style={styles.footer}>
          <View style={styles.dateContainer}>
            <Ionicons name="calendar-outline" size={14} color={colors.textSecondary} />
            <Text style={[styles.date, { color: colors.textSecondary }]}>
              {achievement.date}
            </Text>
          </View>
          
          <View style={[styles.categoryBadge, { backgroundColor: colors.surface }]}>
            <Text style={[styles.categoryText, { color: colors.primary }]}>
              {achievement.category}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Achievements & Awards
          </Text>
          <Text style={[styles.sectionSubtitle, { color: colors.textSecondary }]}>
            Recognition and milestones in my journey
          </Text>
        </View>

        {/* Filter Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterContainer}
          contentContainerStyle={styles.filterContent}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              onPress={() => setFilter(cat.id)}
              style={[
                styles.filterButton,
                { borderColor: colors.border },
                filter === cat.id && {
                  backgroundColor: colors.primary,
                  borderColor: colors.primary,
                },
              ]}
            >
              <Ionicons
                name={cat.icon}
                size={18}
                color={filter === cat.id ? '#ffffff' : colors.text}
              />
              <Text
                style={[
                  styles.filterText,
                  { color: filter === cat.id ? '#ffffff' : colors.text },
                ]}
              >
                {cat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Achievements Grid */}
        {filteredAchievements && filteredAchievements.length > 0 ? (
          <View style={styles.grid}>
            {filteredAchievements.map((achievement) => (
              <View
                key={achievement.id}
                style={[
                  styles.gridItem,
                  { width: isMobile ? '100%' : width < 1024 ? '48%' : '48%' },
                ]}
              >
                <AchievementCard achievement={achievement} />
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="trophy-outline" size={64} color={colors.textSecondary} />
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              No achievements found in this category
            </Text>
          </View>
        )}

        {/* Stats Summary */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: colors.cardBg }, shadows.medium]}>
            <Ionicons name="trophy" size={32} color={colors.accent} />
            <Text style={[styles.statNumber, { color: colors.text }]}>
              {ACHIEVEMENTS.filter(a => a.category === 'competition').length}
            </Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
              Competitions
            </Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: colors.cardBg }, shadows.medium]}>
            <Ionicons name="school" size={32} color={colors.primary} />
            <Text style={[styles.statNumber, { color: colors.text }]}>
              {ACHIEVEMENTS.filter(a => a.category === 'academic').length}
            </Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
              Academic
            </Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: colors.cardBg }, shadows.medium]}>
            <Ionicons name="git-branch" size={32} color={colors.secondary} />
            <Text style={[styles.statNumber, { color: colors.text }]}>
              {ACHIEVEMENTS.filter(a => a.category === 'contribution').length}
            </Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
              Contributions
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xxl * 2,
  },
  content: {
    maxWidth: SIZES.width,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    marginBottom: SPACING.xl,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: FONTS.sizes.xxxl,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: FONTS.sizes.md,
    textAlign: 'center',
  },
  filterContainer: {
    marginBottom: SPACING.xl,
  },
  filterContent: {
    gap: SPACING.sm,
    paddingHorizontal: SPACING.xs,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: SIZES.borderRadius,
    borderWidth: 2,
    gap: SPACING.xs,
  },
  filterText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.lg,
    marginBottom: SPACING.xxl,
  },
  gridItem: {
    marginBottom: SPACING.lg,
  },
  card: {
    borderRadius: SIZES.borderRadius,
    padding: SPACING.lg,
    height: '100%',
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  emoji: {
    fontSize: 36,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: FONTS.sizes.lg,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
  },
  description: {
    fontSize: FONTS.sizes.sm,
    lineHeight: FONTS.sizes.sm * 1.6,
    marginBottom: SPACING.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  date: {
    fontSize: FONTS.sizes.sm,
  },
  categoryBadge: {
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    borderRadius: SIZES.borderRadiusSm,
  },
  categoryText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.lg,
    flexWrap: 'wrap',
  },
  statCard: {
    alignItems: 'center',
    padding: SPACING.xl,
    borderRadius: SIZES.borderRadius,
    minWidth: width < 768 ? '30%' : 150,
  },
  statNumber: {
    fontSize: FONTS.sizes.xxxl,
    fontWeight: 'bold',
    marginTop: SPACING.sm,
  },
  statLabel: {
    fontSize: FONTS.sizes.sm,
    marginTop: SPACING.xs,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: SPACING.xxl * 2,
    gap: SPACING.md,
  },
  emptyText: {
    fontSize: FONTS.sizes.md,
  },
});

export default Achievements;
