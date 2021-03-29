import React from 'react';
import { useColorScheme, StatusBar } from 'react-native';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  );
};
