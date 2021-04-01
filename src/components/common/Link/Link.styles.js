import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Colors from '../../../utils/colors';

const CustomTouchableOpacity = styled(TouchableOpacity).attrs({
  activeOpacity: 0.35,
})`
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: ${Colors.BLUE};
`;

export default {
  Text,
  TouchableOpacity: CustomTouchableOpacity,
};
