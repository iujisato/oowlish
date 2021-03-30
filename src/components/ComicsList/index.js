import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { compose } from '../../helpers/functionHelper';
import { withAppStateConsumer } from '../../providers/AppStateProvider';

const ComicsListContainer = (props) => {
  return (
    <SafeAreaView>
      <Text>Comics List!</Text>
    </SafeAreaView>
  )
};

export default compose(
  withAppStateConsumer,
)(ComicsListContainer);
