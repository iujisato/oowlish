import React from 'react';

import { compose } from '../../helpers/functionHelper';
import { withAppStateConsumer } from '../../providers/AppStateProvider';

import HeroSelectionForm from './HeroSelectionForm.native';

const ComicsListContainer = (props) => {
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>

      </View>
    </SafeAreaView>
  )
};

export default compose(
  withAppStateConsumer,
)(HeroSelectionContainer);
