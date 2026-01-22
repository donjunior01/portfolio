import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { PERSONAL_INFO, EDUCATION, SKILLS, EXPERIENCE, CERTIFICATIONS } from '../../assets/data/portfolioData';

const { width } = Dimensions.get('window');

const CV = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      maxWidth: 850,
      width: '100%',
      alignSelf: 'center',
      paddingHorizontal: width < 768 ? 16 : 32,
      paddingVertical: 24,
    },
    // Header Section
    header: {
      borderBottomWidth: 3,
      borderBottomColor: colors.primary,
      paddingBottom: 16,
      marginBottom: 20,
    },
    name: {
      fontSize: 32,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 4,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.primary,
      marginBottom: 12,
    },
    contactRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 16,
      marginTop: 8,
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    contactText: {
      fontSize: 12,
      color: colors.text,
    },
    // Section Styles
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 12,
      paddingBottom: 6,
      borderBottomWidth: 2,
      borderBottomColor: colors.primary,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    // Professional Summary
    summaryText: {
      fontSize: 12,
      lineHeight: 18,
      color: colors.text,
      textAlign: 'justify',
    },
    // Education
    educationItem: {
      marginBottom: 12,
    },
    degreeRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 4,
    },
    degree: {
      fontSize: 13,
      fontWeight: '700',
      color: colors.text,
      flex: 1,
    },
    dateText: {
      fontSize: 11,
      color: colors.textSecondary,
      fontWeight: '600',
    },
    institution: {
      fontSize: 12,
      fontWeight: '600',
      color: colors.primary,
      marginBottom: 2,
    },
    location: {
      fontSize: 11,
      color: colors.textSecondary,
      marginBottom: 6,
    },
    achievementsList: {
      marginTop: 6,
    },
    achievementItem: {
      fontSize: 11,
      color: colors.text,
      lineHeight: 16,
      marginBottom: 2,
      paddingLeft: 12,
    },
    // Experience
    experienceItem: {
      marginBottom: 14,
    },
    jobTitleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 4,
    },
    jobTitle: {
      fontSize: 13,
      fontWeight: '700',
      color: colors.text,
      flex: 1,
    },
    company: {
      fontSize: 12,
      fontWeight: '600',
      color: colors.primary,
      marginBottom: 2,
    },
    responsibilityItem: {
      fontSize: 11,
      color: colors.text,
      lineHeight: 16,
      marginBottom: 2,
      paddingLeft: 12,
    },
    // Skills
    skillsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
    },
    skillCategory: {
      flex: 1,
      minWidth: width < 768 ? '100%' : '48%',
      marginBottom: 12,
    },
    skillCategoryTitle: {
      fontSize: 12,
      fontWeight: '700',
      color: colors.primary,
      marginBottom: 6,
    },
    skillsList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
    },
    skillTag: {
      backgroundColor: colors.primary + '15',
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.primary + '30',
    },
    skillTagText: {
      fontSize: 10,
      color: colors.text,
      fontWeight: '600',
    },
    // Certifications
    certGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    certItem: {
      flex: 1,
      minWidth: width < 768 ? '100%' : '48%',
      marginBottom: 6,
    },
    certName: {
      fontSize: 11,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 2,
    },
    certIssuer: {
      fontSize: 10,
      color: colors.textSecondary,
    },
    // Two Column Layout
    twoColumnRow: {
      flexDirection: width < 768 ? 'column' : 'row',
      gap: 24,
    },
    column: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{PERSONAL_INFO.name}</Text>
          <Text style={styles.title}>{PERSONAL_INFO.title}</Text>
          
          <View style={styles.contactRow}>
            <View style={styles.contactItem}>
              <Ionicons name="mail" size={14} color={colors.primary} />
              <Text style={styles.contactText}>{PERSONAL_INFO.email}</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="call" size={14} color={colors.primary} />
              <Text style={styles.contactText}>{PERSONAL_INFO.phone}</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="location" size={14} color={colors.primary} />
              <Text style={styles.contactText}>{PERSONAL_INFO.location}</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="logo-github" size={14} color={colors.primary} />
              <Text style={styles.contactText}>github.com/donjunio01</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="logo-linkedin" size={14} color={colors.primary} />
              <Text style={styles.contactText}>linkedin.com/in/donfack-junior</Text>
            </View>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>{PERSONAL_INFO.bio}</Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {EDUCATION.map((edu) => (
            <View key={edu.id} style={styles.educationItem}>
              <View style={styles.degreeRow}>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.dateText}>{edu.startDate} - {edu.endDate}</Text>
              </View>
              <Text style={styles.institution}>{edu.institution}</Text>
              <Text style={styles.location}>{edu.location} | GPA: {edu.gpa}</Text>
              
              <View style={styles.achievementsList}>
                {edu.achievements.slice(0, 3).map((achievement, idx) => (
                  <Text key={idx} style={styles.achievementItem}>• {achievement}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {EXPERIENCE.slice(0, 3).map((exp) => (
            <View key={exp.id} style={styles.experienceItem}>
              <View style={styles.jobTitleRow}>
                <Text style={styles.jobTitle}>{exp.title}</Text>
                <Text style={styles.dateText}>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</Text>
              </View>
              <Text style={styles.company}>{exp.company} | {exp.location}</Text>
              
              <View style={styles.achievementsList}>
                {exp.responsibilities.slice(0, 4).map((resp, idx) => (
                  <Text key={idx} style={styles.responsibilityItem}>• {resp}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Skills - Two Column Layout */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsGrid}>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Languages</Text>
              <View style={styles.skillsList}>
                {SKILLS.languages.map((skill, idx) => (
                  <View key={idx} style={styles.skillTag}>
                    <Text style={styles.skillTagText}>{skill.name}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Frontend</Text>
              <View style={styles.skillsList}>
                {SKILLS.frontend.map((skill, idx) => (
                  <View key={idx} style={styles.skillTag}>
                    <Text style={styles.skillTagText}>{skill.name}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Backend</Text>
              <View style={styles.skillsList}>
                {SKILLS.backend.map((skill, idx) => (
                  <View key={idx} style={styles.skillTag}>
                    <Text style={styles.skillTagText}>{skill.name}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Database & Tools</Text>
              <View style={styles.skillsList}>
                {[...SKILLS.database, ...SKILLS.tools].slice(0, 8).map((skill, idx) => (
                  <View key={idx} style={styles.skillTag}>
                    <Text style={styles.skillTagText}>{skill.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          <View style={styles.certGrid}>
            {CERTIFICATIONS.slice(0, 6).map((cert) => (
              <View key={cert.id} style={styles.certItem}>
                <Text style={styles.certName}>{cert.name}</Text>
                <Text style={styles.certIssuer}>{cert.issuer} • {cert.date}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CV;
