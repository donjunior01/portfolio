import { View, Text } from '@react-pdf/renderer';
import { resolveByProfile } from '../../utils/cvSectionOrder';
import { entryStyles } from './cvStyles';

const ExperienceItem = ({ experience, profile }) => {
  const responsibilities = resolveByProfile(experience.responsibilities, profile);
  const subtitle = experience.location
    ? `${experience.company}, ${experience.location}`
    : experience.company;

  return (
    <View style={entryStyles.container}>
      <View style={entryStyles.row} wrap={false}>
        <Text style={entryStyles.title}>{experience.title}</Text>
        <Text style={entryStyles.dates}>{experience.period}</Text>
      </View>
      <Text style={entryStyles.subtitle}>{subtitle}</Text>
      {experience.project && (
        <Text style={entryStyles.subtitle}>{experience.project}</Text>
      )}
      {responsibilities && responsibilities.length > 0 && (
        <View>
          {responsibilities.map((resp, index) => (
            <View key={index} style={entryStyles.bulletRow} wrap={false}>
              <Text style={entryStyles.bulletMark}>•</Text>
              <Text style={entryStyles.bulletText}>{resp}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default ExperienceItem;
