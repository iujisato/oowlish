import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// configs initializers
import './src/configs/reactotron';

import { compose } from './src/helpers/functionHelper';
import StatusBar from './src/components/common/StatusBar';

// injected providers
import { withAppStateProvider } from './src/providers/AppStateProvider';

// route components
import Onboarding from './src/components/Onboarding';
import HeroSelection from './src/components/HeroSelection';
import ComicsList from './src/components/ComicsList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Onboarding" headerMode="none">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="HeroSelection" component={HeroSelection} />
        <Stack.Screen name="ComicsList" component={ComicsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default compose(
  withAppStateProvider,
)(App);
