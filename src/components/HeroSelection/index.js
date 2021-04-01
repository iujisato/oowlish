import React from 'react';

import { compose } from '../../helpers/functionHelper';
import { withAppStateConsumer } from '../../providers/AppStateProvider';

import HeroSelectionFormContainer from './HeroSelectionForm.container';
import Styled from './HeroSelectionForm.styles';

const image = require('../../assets/onboarding/pop-art-vector.jpg');

const HeroSelectionScene = (props) => (
  <Styled.SafeAreaContainer>
    <Styled.ImageBackground source={image}>
      <Styled.Container>
        <HeroSelectionFormContainer {...props} />
      </Styled.Container>
    </Styled.ImageBackground>
  </Styled.SafeAreaContainer>
);

export default compose(
  withAppStateConsumer,
)(HeroSelectionScene);
