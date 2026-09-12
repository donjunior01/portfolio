import { View, Text, StyleSheet } from '@react-pdf/renderer';
import CVSection from './CVSection';
import ExperienceItem from './ExperienceItem';
import ProjectItem from './ProjectItem';
import { resolveByProfile } from '../../utils/cvSectionOrder';
import { CV_COLORS, entryStyles } from './cvStyles';

const CVMainContent = ({
  education,
  experience,
  projects,
  skillGroups,
  languagesSpoken,
  interests,
  certifications,
  extracurricular,
  visibleSections,
  translations,
  sectionOrder,
  profile,
}) => {
  const sections = {
    skills: (
      <CVSection key="skills" title={translations.skills}>
        {(skillGroups || []).map((group, index) => (
          <View key={index} style={styles.skillRow}>
            <Text style={styles.skillLabel}>{group.category}</Text>
            <Text style={styles.skillValues}>{group.items.join(' • ')}</Text>
          </View>
        ))}
      </CVSection>
    ),
    education: (
      <CVSection key="education" title={translations.education}>
        {education.map((edu, index) => {
          const highlights = resolveByProfile(edu.highlights, profile);
          const subtitle = edu.location ? `${edu.institution}, ${edu.location}` : edu.institution;
          return (
            <View key={index} style={entryStyles.container}>
              <View style={entryStyles.row} wrap={false}>
                <Text style={entryStyles.title}>{edu.title}</Text>
                <Text style={entryStyles.dates}>{edu.period}</Text>
              </View>
              <Text style={entryStyles.subtitle}>{subtitle}</Text>
              {highlights && highlights.length > 0 && (
                <View>
                  {highlights.map((highlight, idx) => (
                    <View key={idx} style={entryStyles.bulletRow} wrap={false}>
                      <Text style={entryStyles.bulletMark}>•</Text>
                      <Text style={entryStyles.bulletText}>{highlight}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </CVSection>
    ),
    experience: experience && experience.length > 0 && (
      <CVSection key="experience" title={translations.experience}>
        {experience.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} profile={profile} />
        ))}
      </CVSection>
    ),
    projects: projects && projects.length > 0 && (
      <CVSection key="projects" title={translations.projects}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} profile={profile} />
        ))}
      </CVSection>
    ),
    languages: (
      <CVSection key="languages" title={translations.languages}>
        <Text style={entryStyles.paragraph}>
          {languagesSpoken.map((lang) => `${lang.name} — ${lang.level}`).join('  •  ')}
        </Text>
      </CVSection>
    ),
    interests: interests && interests.length > 0 && (
      <CVSection key="interests" title={translations.interests}>
        <Text style={entryStyles.paragraph}>{interests.join('  •  ')}</Text>
      </CVSection>
    ),
  };

  return (
    <View style={styles.content}>
      {sectionOrder.map((key) => sections[key])}

      {visibleSections.certifications && certifications && certifications.length > 0 && (
        <CVSection title={translations.certifications}>
          {certifications.map((cert, index) => (
            <View key={index} style={entryStyles.container}>
              <Text style={entryStyles.plainTitle}>{cert.name}</Text>
              <Text style={entryStyles.subtitle}>{cert.issuer}</Text>
            </View>
          ))}
        </CVSection>
      )}

      {visibleSections.extracurricular && extracurricular && extracurricular.length > 0 && (
        <CVSection title={translations.extracurricular}>
          {extracurricular.map((activity, index) => (
            <View key={index} style={entryStyles.container}>
              <Text style={entryStyles.plainTitle}>{activity.role}</Text>
              <Text style={entryStyles.subtitle}>{activity.organization}</Text>
              {activity.description && (
                <Text style={entryStyles.paragraph}>{activity.description}</Text>
              )}
            </View>
          ))}
        </CVSection>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
  },
  skillRow: {
    flexDirection: 'row',
    paddingVertical: 0.5,
  },
  skillLabel: {
    width: 115,
    paddingRight: 5,
    fontSize: 9.5,
    fontWeight: 'bold',
    color: CV_COLORS.accent,
  },
  skillValues: {
    width: 350,
    fontSize: 9.5,
    color: CV_COLORS.body,
  },
});

export default CVMainContent;
