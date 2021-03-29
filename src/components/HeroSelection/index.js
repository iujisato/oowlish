import React from 'react';
import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import { Formik } from 'formik';

import HeroSelectionForm from './HeroSelectionForm.native';

const HeroSelectionContainer = () => {
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <HeroSelectionForm />
      </View>
    </SafeAreaView>
  )
};

export default HeroSelectionContainer;
