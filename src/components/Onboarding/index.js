import React from 'react';

import Styled from './Onboarding.styles';

const image = require('../../assets/onboarding/captain-marvel-vector.jpg');

const OnboardingContainer = ({ navigation }) => (
  <Styled.SafeAreaContainer>
    <Styled.ImageBackground source={image}>
      <Styled.Container>
        <Styled.ContentWrapper>
          <Styled.Text>
            Welcome to MaKo, your companion for searching for your favorite Marvel hero's comic!
          </Styled.Text>

          <Styled.Text>
            Click on "Next" and let's proceed our first time setup!
          </Styled.Text>
        </Styled.ContentWrapper>

        <Styled.Button title="Next" onPress={() => navigation.navigate('HeroSelection')} />
      </Styled.Container>
    </Styled.ImageBackground>
  </Styled.SafeAreaContainer>
);

export default OnboardingContainer;
