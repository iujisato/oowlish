import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppRouter from './src/routes/App.router.native';
import StatusBar from './src/components/common/StatusBar';
import Onboarding from './src/components/Onboarding';
import HeroSelection from './src/components/HeroSelection';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Onboarding" headerMode="none">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="HeroSelection" component={HeroSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
