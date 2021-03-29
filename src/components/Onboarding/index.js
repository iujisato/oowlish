import React from 'react';
import { View, Text, Button, SafeAreaView, ImageBackground } from 'react-native';

// const image = { uri: '../../assets/onboarding/captain-marvel-vector.jpg' };
const image = require('../../assets/onboarding/captain-marvel-vector.jpg');

const OnboardingContainer = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ImageBackground source={image} style={{ width: '100%', height: '100%' }}>
        <View style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.25)', alignItems: 'center', justifyContent: 'center' }}>
          <Text>ONBOARDING</Text>
          <Button title="Continue" onPress={() => navigation.navigate('HeroSelection')}/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default OnboardingContainer;
