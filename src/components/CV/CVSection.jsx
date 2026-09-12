import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { CV_COLORS } from './cvStyles';

const CVSection = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.title}>{title}</Text>
    <View>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  section: {
    marginTop: 4,
  },
  title: {
    fontSize: 10.5,
    fontWeight: 'bold',
    color: CV_COLORS.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingBottom: 1.5,
    marginBottom: 1.5,
    borderBottom: `0.75pt solid ${CV_COLORS.accent}`,
  },
});

export default CVSection;
