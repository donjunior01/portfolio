import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { SPACING, FONTS, SIZES } from '../constants/theme';
import { PROJECTS } from '../../assets/data/portfolioData';
import { fetchGitHubRepos } from '../services/githubService';
import { fetchGitLabProjects } from '../services/gitlabService';
import { GITHUB_CONFIG } from '../config/githubConfig';
import { GITLAB_CONFIG } from '../config/gitlabConfig';

const { width } = Dimensions.get('window');

const Projects = () => {
  const { colors, shadows } = useTheme();
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState(PROJECTS);
  const [loading, setLoading] = useState(true);
  const [integrations, setIntegrations] = useState({ github: false, gitlab: false });
  const isMobile = width < 768;

  const manualProjects = useMemo(
    () =>
      PROJECTS.map((project) => ({
        ...project,
        id: 'manual-' + project.id,
        source: 'manual',
        repoUrl: project.github || null,
      })),
    []
  );

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const [githubRepos, gitlabProjects] = await Promise.all([
          GITHUB_CONFIG.enabled ? fetchGitHubRepos(GITHUB_CONFIG.maxRepos) : Promise.resolve([]),
          GITLAB_CONFIG.enabled ? fetchGitLabProjects(GITLAB_CONFIG.maxProjects) : Promise.resolve([]),
        ]);

        const combinedProjects = [...githubRepos, ...gitlabProjects, ...manualProjects];

        setProjects(combinedProjects);
        setIntegrations({
          github: githubRepos.length > 0,
          gitlab: gitlabProjects.length > 0,
        });
      } catch (error) {
        console.error('Error loading remote projects:', error);
        setProjects(manualProjects);
        setIntegrations({ github: false, gitlab: false });
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [manualProjects]);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI/ML' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const openLink = (url) => {
    if (!url) return;
    if (Platform.OS === 'web') {
      window.open(url, '_blank');
    }
  };

  const integrationSummary = () => {
    const sources = [
      integrations.github ? 'GitHub' : null,
      integrations.gitlab ? 'GitLab' : null,
    ].filter(Boolean);

    if (!sources.length) {
      return 'Showcasing my best work in web, mobile, and AI development';
    }

    return 'Live projects from ' + sources.join(' + ') + ' plus curated highlights';
  };

  const ProjectCard = ({ project }) => (
    <View style={[styles.card, { backgroundColor: colors.cardBg }, shadows.medium]}>
      <Image source={{ uri: project.image }} style={styles.cardImage} resizeMode="cover" />

      {project.featured && (
        <View style={[styles.badge, { backgroundColor: colors.accent }]}>
          <Ionicons name="star" size={12} color="#ffffff" />
          <Text style={styles.badgeText}>Featured</Text>
        </View>
      )}

      {project.stats && project.stats.stars > 0 && (
        <View style={[styles.statsBadge, { backgroundColor: 'rgba(0,0,0,0.7)' }]}>
          <Ionicons name="star" size={12} color="#fbbf24" />
          <Text style={styles.statsText}>{project.stats.stars}</Text>
          {project.stats.forks > 0 && (
            <>
              <Ionicons name="git-branch" size={12} color="#ffffff" />
              <Text style={styles.statsText}>{project.stats.forks}</Text>
            </>
          )}
        </View>
      )}

      <View style={styles.cardContent}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>{project.title}</Text>
        <Text style={[styles.cardDescription, { color: colors.textSecondary }]}>
          {project.description}
        </Text>

        <View style={styles.techContainer}>
          {project.tech.slice(0, 4).map((tech, index) => (
            <View key={index} style={[styles.techBadge, { backgroundColor: colors.surface }]}>
              <Text style={[styles.techText, { color: colors.primary }]}>{tech}</Text>
            </View>
          ))}
          {project.tech.length > 4 && (
            <Text style={[styles.techText, { color: colors.textSecondary }]}>+{project.tech.length - 4}</Text>
          )}
        </View>

        {project.highlights && project.highlights.length > 0 && (
          <View style={styles.highlightsContainer}>
            {project.highlights.slice(0, 3).map((highlight, index) => (
              <View key={index} style={styles.highlightItem}>
                <Ionicons name="checkmark-circle" size={16} color={colors.accent} />
                <Text style={[styles.highlightText, { color: colors.textSecondary }]}>{highlight}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.cardActions}>
          {(project.repoUrl || project.github) && (
            <TouchableOpacity
              onPress={() => openLink(project.repoUrl || project.github)}
              style={[styles.actionButton, { borderColor: colors.border }]}
            >
              <Ionicons
                name={
                  project.source === 'gitlab'
                    ? 'logo-gitlab'
                    : project.source === 'github'
                      ? 'logo-github'
                      : 'code-slash'
                }
                size={20}
                color={colors.text}
              />
              <Text style={[styles.actionText, { color: colors.text }]}>
                {project.source === 'gitlab' ? 'GitLab' : project.source === 'github' ? 'GitHub' : 'Code'}
              </Text>
            </TouchableOpacity>
          )}

          {project.demo && (
            <TouchableOpacity
              onPress={() => openLink(project.demo)}
              style={[styles.actionButton, styles.primaryAction, { backgroundColor: colors.primary }]}
            >
              <Ionicons name="open-outline" size={20} color="#ffffff" />
              <Text style={[styles.actionText, { color: '#ffffff' }]}>Demo</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Featured Projects</Text>
          <Text style={[styles.sectionSubtitle, { color: colors.textSecondary }]}>
            {integrationSummary()}
          </Text>
          {(integrations.github || integrations.gitlab) && (
            <View style={styles.integrationLinks}>
              {integrations.github && (
                <TouchableOpacity
                  onPress={() => openLink('https://github.com/' + GITHUB_CONFIG.username)}
                  style={styles.integrationLink}
                >
                  <Ionicons name="logo-github" size={20} color={colors.primary} />
                  <Text style={[styles.githubLinkText, { color: colors.primary }]}>View all on GitHub</Text>
                </TouchableOpacity>
              )}
              {integrations.gitlab && (
                <TouchableOpacity
                  onPress={() => openLink('https://gitlab.com/' + GITLAB_CONFIG.username)}
                  style={styles.integrationLink}
                >
                  <Ionicons name="logo-gitlab" size={20} color={colors.accent} />
                  <Text style={[styles.githubLinkText, { color: colors.accent }]}>View all on GitLab</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>

        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={[styles.loadingText, { color: colors.textSecondary }]}>
              Loading projects from developer platforms...
            </Text>
          </View>
        )}

        {!loading && (
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.filterContainer}
              contentContainerStyle={styles.filterContent}
            >
              {filters.map((f) => (
                <TouchableOpacity
                  key={f.id}
                  onPress={() => setFilter(f.id)}
                  style={[
                    styles.filterButton,
                    { borderColor: colors.border },
                    filter === f.id && { backgroundColor: colors.primary, borderColor: colors.primary },
                  ]}
                >
                  <Text style={[styles.filterText, { color: filter === f.id ? '#ffffff' : colors.text }]}>
                    {f.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.grid}>
              {filteredProjects.map((project) => (
                <View
                  key={project.id}
                  style={[styles.gridItem, { width: isMobile ? '100%' : width < 1024 ? '48%' : '31%' }]}
                >
                  <ProjectCard project={project} />
                </View>
              ))}
            </View>
          </>
        )}

        {!loading && filteredProjects.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="folder-open-outline" size={64} color={colors.textSecondary} />
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>No projects found in this category</Text>
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
    marginBottom: SPACING.xl,
    alignItems: 'center',
  },
  integrationLinks: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginTop: SPACING.md,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  integrationLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  githubLinkText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '600',
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
    maxWidth: 600,
  },
  filterContainer: {
    marginBottom: SPACING.xl,
  },
  filterContent: {
    gap: SPACING.sm,
    paddingHorizontal: SPACING.xs,
  },
  filterButton: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: SIZES.borderRadius,
    borderWidth: 2,
  },
  filterText: {
    fontSize: FONTS.sizes.md,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.lg,
  },
  gridItem: {
    marginBottom: SPACING.lg,
  },
  card: {
    borderRadius: SIZES.borderRadius,
    overflow: 'hidden',
    height: '100%',
  },
  cardImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#e5e7eb',
  },
  badge: {
    position: 'absolute',
    top: SPACING.md,
    right: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    borderRadius: SIZES.borderRadiusSm,
    gap: 4,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: FONTS.sizes.xs,
    fontWeight: '600',
  },
  statsBadge: {
    position: 'absolute',
    top: SPACING.md,
    left: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    borderRadius: SIZES.borderRadiusSm,
    gap: 6,
  },
  statsText: {
    color: '#ffffff',
    fontSize: FONTS.sizes.xs,
    fontWeight: '600',
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: SPACING.xxl * 2,
    gap: SPACING.md,
  },
  loadingText: {
    fontSize: FONTS.sizes.md,
    textAlign: 'center',
  },
  cardContent: {
    padding: SPACING.lg,
  },
  cardTitle: {
    fontSize: FONTS.sizes.xl,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
  },
  cardDescription: {
    fontSize: FONTS.sizes.sm,
    lineHeight: FONTS.sizes.sm * 1.6,
    marginBottom: SPACING.md,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.xs,
    marginBottom: SPACING.md,
  },
  techBadge: {
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    borderRadius: SIZES.borderRadiusSm,
  },
  techText: {
    fontSize: FONTS.sizes.xs,
    fontWeight: '600',
  },
  highlightsContainer: {
    marginBottom: SPACING.md,
    gap: SPACING.xs,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  highlightText: {
    fontSize: FONTS.sizes.sm,
    flex: 1,
  },
  cardActions: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginTop: SPACING.sm,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: SIZES.borderRadiusSm,
    gap: SPACING.xs,
    borderWidth: 2,
  },
  primaryAction: {
    borderWidth: 0,
  },
  actionText: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '600',
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

export default Projects;
