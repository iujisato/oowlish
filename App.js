import React from 'react';
import type {Node} from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import StatusBar from './src/components/StatusBar';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Test</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
