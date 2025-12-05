import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import Hero from '../components/Hero';

const HomePage = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <Hero navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomePage;
