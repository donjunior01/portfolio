import React, { useState, useEffect, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider, useTheme } from './src/hooks/useTheme';
import SimpleHeader from './src/components/SimpleHeader';
import Loader from './src/components/Loader';

// Import all page screens
import HomePage from './src/screens/HomePage';
import AboutPage from './src/screens/AboutPage';
import ProjectsPage from './src/screens/ProjectsPage';
import ExperiencePage from './src/screens/ExperiencePage';
import AchievementsPage from './src/screens/AchievementsPage';
import ContactPage from './src/screens/ContactPage';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('Home');

  const navigationTheme = useMemo(() => ({
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
      card: colors.surface,
      primary: colors.primary,
      text: colors.text,
      border: colors.border,
    },
  }), [colors]);

  const handleNavigationStateChange = (state) => {
    if (state) {
      const route = state.routes[state.index];
      setCurrentRoute(route.name);
      
      // Show loader on navigation
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  return (
    <>
      <NavigationContainer
        onStateChange={handleNavigationStateChange}
        theme={navigationTheme}
      >
        <Stack.Navigator
          screenOptions={{
            header: ({ navigation }) => (
              <SimpleHeader navigation={navigation} currentRoute={currentRoute} />
            ),
            animation: 'fade',
            animationDuration: 300,
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomePage}
          />
          <Stack.Screen 
            name="About" 
            component={AboutPage}
          />
          <Stack.Screen 
            name="Projects" 
            component={ProjectsPage}
          />
          <Stack.Screen 
            name="Experience" 
            component={ExperiencePage}
          />
          <Stack.Screen 
            name="Achievements" 
            component={AchievementsPage}
          />
          <Stack.Screen 
            name="Contact" 
            component={ContactPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
      {loading && <Loader />}
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <AppNavigator />
    </ThemeProvider>
  );
}
