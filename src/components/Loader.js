import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { useTheme } from '../hooks/useTheme';

const { width } = Dimensions.get('window');

const Loader = () => {
  const { colors } = useTheme();
  const spinValue = useRef(new Animated.Value(0)).current;
  const fadeValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Spinning animation
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor: colors.background, opacity: fadeValue }]}>
      <View style={styles.loaderWrapper}>
        <Animated.View
          style={[
            styles.spinner,
            { borderTopColor: colors.primary, transform: [{ rotate: spin }] },
          ]}
        />
        <View style={[styles.pulseOuter, { borderColor: colors.primary }]} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  loaderWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  spinner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopWidth: 4,
  },
  pulseOuter: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    opacity: 0.3,
  },
});

export default Loader;
