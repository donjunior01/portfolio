import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { CV_COLORS, CV_PAGE } from './cvStyles';

const SEP = '  •  ';

const CVHeader = ({ personalInfo }) => {
  const hasPhoto = Boolean(personalInfo.photoUrl);
  const hasInternshipTarget = Boolean(personalInfo.internshipTarget);
  const hasHeadline = Boolean(personalInfo.headline);

  return (
    <View>
      <View style={styles.header}>
        <View style={[styles.identity, { width: hasPhoto ? 370 : CV_PAGE.contentWidth, paddingRight: hasPhoto ? 10 : 0 }]}>
          <Text style={styles.name}>{personalInfo.formalName}</Text>
          <Text style={hasInternshipTarget ? styles.subtitleTight : styles.subtitle}>{personalInfo.title}</Text>
          {hasInternshipTarget && (
            <Text style={styles.internshipTarget}>{personalInfo.internshipTarget}</Text>
          )}
          <Text style={styles.contactLine}>
            {personalInfo.location}{SEP}{personalInfo.phone}
          </Text>
          <Text style={styles.contactLine}>
            {personalInfo.email}{SEP}{personalInfo.linkedin}
          </Text>
          <Text style={styles.contactLine}>
            {personalInfo.github}{SEP}{personalInfo.gitlab}{SEP}{personalInfo.website}
          </Text>
        </View>

        {hasPhoto && (
          <Image style={styles.photo} src={personalInfo.photoUrl} />
        )}
      </View>

      {hasHeadline && (
        <Text style={styles.headline}>{personalInfo.headline}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  identity: {
    flexDirection: 'column',
  },
  photo: {
    width: 95,
    height: 118,
    borderRadius: 3,
    objectFit: 'cover',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: CV_COLORS.name,
    marginBottom: 1,
  },
  subtitle: {
    fontSize: 10.5,
    fontWeight: 'normal',
    color: CV_COLORS.accent,
    marginBottom: 5,
  },
  subtitleTight: {
    fontSize: 10.5,
    fontWeight: 'normal',
    color: CV_COLORS.accent,
    marginBottom: 1,
  },
  internshipTarget: {
    fontSize: 10.5,
    fontWeight: 'bold',
    color: CV_COLORS.accent,
    marginBottom: 5,
  },
  contactLine: {
    fontSize: 9,
    color: CV_COLORS.muted,
    marginBottom: 1,
  },
  headline: {
    fontSize: 9.5,
    color: CV_COLORS.body,
    lineHeight: 1.25,
    marginBottom: 4,
    marginTop: 3,
    width: CV_PAGE.contentWidth,
  },
});

export default CVHeader;
