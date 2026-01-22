import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { SPACING, FONTS, SIZES } from '../constants/theme';
import { EXPERIENCE, CERTIFICATIONS } from '../../assets/data/portfolioData';

const { width } = Dimensions.get('window');

const Experience = () => {
  const { colors, shadows } = useTheme();
  const isMobile = width < 768;

  const TimelineItem = ({ item, isLast }) => (
    <View style={styles.timelineItem}>
      {/* Timeline Line */}
      <View style={styles.timelineLineContainer}>
        <View style={[styles.timelineDot, { backgroundColor: colors.primary }]} />
        {!isLast && (
          <View style={[styles.timelineLine, { backgroundColor: colors.border }]} />
        )}
      </View>

      {/* Content */}
      <View
        style={[
          styles.timelineCard,
          { backgroundColor: colors.cardBg },
          shadows.medium,
        ]}
      >
        <View style={styles.timelineHeader}>
          <View style={[styles.iconContainer, { backgroundColor: colors.surface }]}>
            <Ionicons name="briefcase" size={20} color={colors.primary} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.jobTitle, { color: colors.text }]}>
              {item.title}
            </Text>
            <Text style={[styles.company, { color: colors.primary }]}>
              {item.company}
            </Text>
            <View style={styles.jobMeta}>
              <Ionicons name="calendar-outline" size={14} color={colors.textSecondary} />
              <Text style={[styles.metaText, { color: colors.textSecondary }]}>
                {item.startDate} - {item.current ? 'Present' : item.endDate}
              </Text>
              {item.location && (
                <>
                  <Text style={[styles.metaText, { color: colors.textSecondary }]}>•</Text>
                  <Ionicons name="location-outline" size={14} color={colors.textSecondary} />
                  <Text style={[styles.metaText, { color: colors.textSecondary }]}>
                    {item.location}
                  </Text>
                </>
              )}
            </View>
          </View>
        </View>

        {item.description && (
          <Text style={[styles.description, { color: colors.textSecondary }]}>
            {item.description}
          </Text>
        )}

        {/* Responsibilities */}
        {item.responsibilities && item.responsibilities.length > 0 && (
          <View style={styles.subsection}>
            <Text style={[styles.subsectionTitle, { color: colors.text }]}>
              Responsibilities:
            </Text>
            {item.responsibilities.map((resp, index) => (
              <View key={index} style={styles.listItem}>
                <View style={[styles.bullet, { backgroundColor: colors.primary }]} />
                <Text style={[styles.listText, { color: colors.textSecondary }]}>
                  {resp}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Achievements */}
        {item.achievements && item.achievements.length > 0 && (
          <View style={styles.subsection}>
            <Text style={[styles.subsectionTitle, { color: colors.text }]}>
              Key Achievements:
            </Text>
            {item.achievements.map((achievement, index) => (
              <View key={index} style={styles.listItem}>
                <Ionicons name="trophy" size={16} color={colors.accent} />
                <Text style={[styles.listText, { color: colors.textSecondary }]}>
                  {achievement}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );

  const CertificationCard = ({ cert }) => (
    <View
      style={[
        styles.certCard,
        { backgroundColor: colors.cardBg },
        shadows.medium,
      ]}
    >
      <View style={styles.certHeader}>
        <View style={[styles.certIcon, { backgroundColor: colors.surface }]}>
          <Text style={styles.certEmoji}>{cert.icon}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.certName, { color: colors.text }]}>
            {cert.name}
          </Text>
          <Text style={[styles.certIssuer, { color: colors.primary }]}>
            {cert.issuer}
          </Text>
          <Text style={[styles.certDate, { color: colors.textSecondary }]}>
            Issued: {cert.date}
          </Text>
        </View>
      </View>
      {cert.credentialId && (
        <View style={styles.credentialContainer}>
          <Text style={[styles.credentialLabel, { color: colors.textSecondary }]}>
            Credential ID:
          </Text>
          <Text style={[styles.credentialId, { color: colors.text }]}>
            {cert.credentialId}
          </Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Experience & Certifications
          </Text>
          <Text style={[styles.sectionSubtitle, { color: colors.textSecondary }]}>
            My professional journey and achievements
          </Text>
        </View>

        {/* Experience Timeline */}
        {EXPERIENCE && EXPERIENCE.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="briefcase-outline" size={28} color={colors.primary} />
              <Text style={[styles.subsectionTitle, { color: colors.text }]}>
                Work Experience
              </Text>
            </View>

            <View style={styles.timeline}>
              {EXPERIENCE.map((exp, index) => (
                <TimelineItem
                  key={exp.id}
                  item={exp}
                  isLast={index === EXPERIENCE.length - 1}
                />
              ))}
            </View>
          </View>
        )}

        {/* Certifications */}
        {CERTIFICATIONS && CERTIFICATIONS.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="ribbon-outline" size={28} color={colors.primary} />
              <Text style={[styles.subsectionTitle, { color: colors.text }]}>
                Certifications
              </Text>
            </View>

            <View style={styles.certGrid}>
              {CERTIFICATIONS.map((cert) => (
                <View
                  key={cert.id}
                  style={[
                    styles.certGridItem,
                    { width: isMobile ? '100%' : width < 1024 ? '48%' : '31%' },
                  ]}
                >
                  <CertificationCard cert={cert} />
                </View>
              ))}
            </View>
          </View>
        )}

        {(!EXPERIENCE || EXPERIENCE.length === 0) && (!CERTIFICATIONS || CERTIFICATIONS.length === 0) && (
          <View style={styles.emptyState}>
            <Ionicons name="briefcase-outline" size={64} color={colors.textSecondary} />
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              Experience and certifications will be added soon
            </Text>
          </View>
        )}
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
    marginBottom: SPACING.xxl,
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
  section: {
    marginBottom: SPACING.xxl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  subsectionTitle: {
    fontSize: FONTS.sizes.xl,
    fontWeight: 'bold',
  },
  timeline: {
    paddingLeft: SPACING.md,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: SPACING.xl,
  },
  timelineLineContainer: {
    width: 40,
    alignItems: 'center',
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginTop: SPACING.xs,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    marginTop: SPACING.xs,
  },
  timelineCard: {
    flex: 1,
    padding: SPACING.lg,
    borderRadius: SIZES.borderRadius,
    marginLeft: SPACING.lg,
  },
  timelineHeader: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.md,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jobTitle: {
    fontSize: FONTS.sizes.lg,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  company: {
    fontSize: FONTS.sizes.md,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  jobMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    flexWrap: 'wrap',
  },
  metaText: {
    fontSize: FONTS.sizes.sm,
  },
  description: {
    fontSize: FONTS.sizes.sm,
    lineHeight: FONTS.sizes.sm * 1.6,
    marginBottom: SPACING.md,
  },
  subsection: {
    marginTop: SPACING.md,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 6,
  },
  listText: {
    fontSize: FONTS.sizes.sm,
    flex: 1,
    lineHeight: FONTS.sizes.sm * 1.5,
  },
  certGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.lg,
  },
  certGridItem: {
    marginBottom: SPACING.lg,
  },
  certCard: {
    padding: SPACING.lg,
    borderRadius: SIZES.borderRadius,
    height: '100%',
  },
  certHeader: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.md,
  },
  certIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  certEmoji: {
    fontSize: 24,
  },
  certName: {
    fontSize: FONTS.sizes.md,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  certIssuer: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  certDate: {
    fontSize: FONTS.sizes.sm,
  },
  credentialContainer: {
    paddingTop: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  credentialLabel: {
    fontSize: FONTS.sizes.xs,
    marginBottom: SPACING.xs,
  },
  credentialId: {
    fontSize: FONTS.sizes.xs,
    fontFamily: 'monospace',
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

export default Experience;
