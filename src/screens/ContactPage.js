import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import Contact from '../components/Contact';

const ContactPage = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <Contact navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContactPage;
