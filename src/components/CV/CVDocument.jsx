import { Document, Page, View, Font, StyleSheet } from '@react-pdf/renderer';
import CVHeader from './CVHeader';
import CVMainContent from './CVMainContent';
import { getSectionOrder } from '../../utils/cvSectionOrder';
import { CV_FONT, CV_PAGE } from './cvStyles';
import CarlitoRegular from '../../assets/fonts/Carlito-Regular.ttf';
import CarlitoBold from '../../assets/fonts/Carlito-Bold.ttf';
import CarlitoItalic from '../../assets/fonts/Carlito-Italic.ttf';

Font.register({
  family: CV_FONT,
  fonts: [
    { src: CarlitoRegular, fontWeight: 'normal', fontStyle: 'normal' },
    { src: CarlitoBold, fontWeight: 'bold', fontStyle: 'normal' },
    { src: CarlitoItalic, fontWeight: 'normal', fontStyle: 'italic' },
  ],
});

const CVDocument = ({ data, selectedProjects, selectedExperience, language, visibleSections, translations, profile = 'vision' }) => {
  const sectionOrder = getSectionOrder(profile, language);

  // Filter selected projects with language support, then order per profile
  const projectOrder = data.projectOrder?.[profile] || [];
  const projects = data.projects[language]
    .filter((p) => selectedProjects.includes(p.id))
    .sort((a, b) => {
      const ia = projectOrder.indexOf(a.id);
      const ib = projectOrder.indexOf(b.id);
      return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
    });

  const experience = data.experience[language].filter((e) => selectedExperience.includes(e.id));

  const rawPersonalInfo = data.personalInfo[language][0];
  const personalInfo = {
    ...rawPersonalInfo,
    title: rawPersonalInfo.titles[profile],
    formalName: data.personalInfo.formalName,
    photoUrl: data.personalInfo.photoUrl,
  };

  // The reference CV shows only the UTBM + Institut Saint Jean entries
  const education = data.education[language].filter((e) => e.includeInCV !== false);
  const skillGroups = data.skillsByProfile?.[profile]?.[language];
  const languagesSpoken = data.languagesSpoken[language];
  const certifications = data.certifications[language];
  const interests = data.interests[language];
  const extracurricular = data.extracurricular[language];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <CVHeader personalInfo={personalInfo} />

          <CVMainContent
            education={education}
            experience={experience}
            projects={projects}
            skillGroups={skillGroups}
            languagesSpoken={languagesSpoken}
            interests={interests}
            certifications={certifications}
            extracurricular={extracurricular}
            visibleSections={visibleSections}
            translations={translations}
            sectionOrder={sectionOrder}
            profile={profile}
          />
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    fontFamily: CV_FONT,
    fontSize: 9.5,
    backgroundColor: '#ffffff',
    paddingTop: CV_PAGE.marginTop,
    paddingBottom: CV_PAGE.marginBottom,
    paddingLeft: CV_PAGE.marginLeft,
    paddingRight: CV_PAGE.marginRight,
  },
  contentWrapper: {
    width: CV_PAGE.contentWidth,
  },
});

export default CVDocument;
