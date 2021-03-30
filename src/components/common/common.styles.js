import React from 'react';
import styled from 'styled-components/native';
import Button from './Button';
import Colors from '../../utils/colors';

const SafeAreaContainer = styled.SafeAreaView``;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-vertical: 20px;
  padding-horizontal: 20px;
`;

const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const Text = styled.Text`
  color: ${Colors.OFF_BLACK};
  font-size: 14px;
  line-height: 20px;
`;

const CustomButton = styled(Button)`
  background-color: yellow;
`;

const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export default {
  SafeAreaContainer,
  Container,
  ImageBackground,
  Text,
  Button: CustomButton,
  Image,
};
