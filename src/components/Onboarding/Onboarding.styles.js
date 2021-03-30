import styled from 'styled-components/native';
import CommonStyles from '../common/common.styles';

const SafeAreaContainer = styled(CommonStyles.SafeAreaContainer)``;

const Container = styled(CommonStyles.Container)`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.25);
  justify-content: flex-end;
`;

const ContentWrapper = styled(CommonStyles.Container)`
  background-color: rgba(255, 255, 255, 0.75);
  margin-bottom: 50px;
`;

const Text = styled(CommonStyles.Text)`
  font-size: 18px;
  line-height: 24px;
`;

const ImageBackground = styled(CommonStyles.ImageBackground)``;

const Button = styled(CommonStyles.Button)``;

export default {
  SafeAreaContainer,
  Container,
  ContentWrapper,
  Text,
  ImageBackground,
  Button,
};
