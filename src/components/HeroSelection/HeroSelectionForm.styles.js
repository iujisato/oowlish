import styled from 'styled-components/native';
import AutoComplete from 'react-native-autocomplete-input';
import{ Dimensions } from 'react-native';

import CommonStyles from '../common/common.styles';
import Colors from '../../utils/colors';

const { width, height } = Dimensions.get('window');

const SafeAreaContainer = styled(CommonStyles.SafeAreaContainer)``;

const Container = styled(CommonStyles.Container)`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.25);
  justify-content: flex-end;
`;

const ContentContainer = styled(CommonStyles.Container)`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.75);
  justify-content: flex-start;
  margin-bottom: 40px;
`;

const ImageBackground = styled(CommonStyles.ImageBackground)``;

const Text = styled(CommonStyles.Text)`
  color: ${Colors.BLACK}
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  text-align: center;
`;

const Button = styled(CommonStyles.Button)``;

const CustomAutoComplete = styled(AutoComplete).attrs({
  containerStyle: {
    width: width * 0.75,
  },
  inputContainerStyle: {
    height: 40,
    borderWidth: 0,
  },
  listStyle: {
   backgroundColor: 'rgba(255, 255, 255, 0.95)',
   borderWidth: 0,
  },
})``;

const TextInput = styled.TextInput.attrs({
  placeholderTextColor: Colors.BLUE,
})`
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  color: ${Colors.ORANGE};
  min-height: 40px;
  background-color: rgba(255, 255, 255, 0.95);
  padding-horizontal: 5px;
`;

const Title = styled(CommonStyles.Text)`
  color: ${Colors.RED};
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`;

const Image = styled(CommonStyles.Image)`
  margin-bottom: 25px;
`;

const CharacterDescriptionContainer = styled(CommonStyles.Container)`
  flex: 1;
`;

const TouchableOpacity = styled.TouchableOpacity``;

const ItemLabel = styled(CommonStyles.Text)`
  color: ${Colors.BLACK}
  font-size: 16px;
  line-height: 20px;
`;

export default {
  SafeAreaContainer,
  Container,
  ContentContainer,
  ImageBackground,
  Text,
  Button,
  AutoComplete: CustomAutoComplete,
  TextInput,
  Title,
  Image,
  CharacterDescriptionContainer,
  TouchableOpacity,
  ItemLabel,
};
