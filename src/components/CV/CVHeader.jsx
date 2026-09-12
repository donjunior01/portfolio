import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { CV_COLORS, CV_PAGE } from './cvStyles';

const SEP = '  •  ';

const CVHeader = ({ personalInfo }) => {
  const hasPhoto = Boolean(personalInfo.photoUrl);

  return (
    <View style={styles.header}>
      <View style={[styles.identity, { width: hasPhoto ? 370 : CV_PAGE.contentWidth, paddingRight: hasPhoto ? 10 : 0 }]}>
        <Text style={styles.name}>{personalInfo.formalName}</Text>
        <Text style={styles.subtitle}>{personalInfo.title}</Text>
        <Text style={styles.contactLine}>
          {personalInfo.location}{SEP}{personalInfo.phone}
        </Text>
        <Text style={styles.contactLine}>
          {personalInfo.email}{SEP}linkedin.com/in/junior-donfack-assobjio
        </Text>
        <Text style={styles.contactLine}>
          github.com/donjunior01{SEP}gitlab.com/donjunior01{SEP}donjunior01.github.io/portfolio
        </Text>
      </View>

      {hasPhoto && (
        <Image style={styles.photo} src={personalInfo.photoUrl} />
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
  contactLine: {
    fontSize: 9,
    color: CV_COLORS.muted,
    marginBottom: 1.5,
  },
});

export default CVHeader;
