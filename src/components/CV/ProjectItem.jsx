import { View, Text } from '@react-pdf/renderer';
import { resolveByProfile } from '../../utils/cvSectionOrder';
import { entryStyles } from './cvStyles';

const ProjectItem = ({ project, profile }) => {
  const highlights = resolveByProfile(project.highlights, profile);
  const techList = project.tech && project.tech.length > 0 ? project.tech.join(', ') : '';
  const subtitle = project.role && techList
    ? `${project.role} • ${techList}`
    : project.role || techList;

  return (
    <View style={entryStyles.container}>
      <View style={entryStyles.row} wrap={false}>
        <Text style={entryStyles.title}>{project.name}</Text>
        {project.period && (
          <Text style={entryStyles.dates}>{project.period}</Text>
        )}
      </View>
      {subtitle && <Text style={entryStyles.subtitle}>{subtitle}</Text>}
      {highlights && highlights.length > 0 && (
        <View>
          {highlights.map((highlight, index) => (
            <View key={index} style={entryStyles.bulletRow} wrap={false}>
              <Text style={entryStyles.bulletMark}>•</Text>
              <Text style={entryStyles.bulletText}>{highlight}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default ProjectItem;
