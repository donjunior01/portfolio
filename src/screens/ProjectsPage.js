import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import Projects from '../components/Projects';

const ProjectsPage = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <Projects navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProjectsPage;
