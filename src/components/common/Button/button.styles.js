import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Colors from '../../../utils/colors';

const CustomTouchableOpacity = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  width: 80%;
  background-color: ${Colors.ORANGE};
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border-color: ${Colors.RED};
  border-width: 3px;
`;

const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.BLACK};
`;

export default {
  Text,
  TouchableOpacity: CustomTouchableOpacity,
};
