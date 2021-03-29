import React from 'react';
import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import { Formik } from 'formik';

import { compose } from '../../helpers/functionHelper';
import { withAppStateConsumer } from '../../providers/AppStateProvider';

import HeroSelectionForm from './HeroSelectionForm.native';

const HeroSelectionContainer = (props) => {
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <HeroSelectionForm {...props} />
      </View>
    </SafeAreaView>
  )
};

export default compose(
  withAppStateConsumer,
)(HeroSelectionContainer);
