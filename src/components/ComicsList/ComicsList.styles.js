import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import CommonStyles from '../common/common.styles';

const SafeAreaContainer = styled(CommonStyles.SafeAreaContainer)``;

const List = styled(FlatList)`
  padding-horizontal: 30px;
  padding-vertical: 20px;
`;

const CardContentContainer = styled(CommonStyles.Container)`
  align-items: flex-start;
  flex: 1;
`;

const PricesContainer = styled(CommonStyles.Container)`
  align-items: flex-start;
  padding-horizontal: 0;
  padding-vertical: 0;
`;

const Wrapper = styled(CommonStyles.Container)`
  padding-horizontal: 0;
  padding-vertical: 0;
  flex-direction: row;
`;

const Label = styled(CommonStyles.Text)`
  font-size: 18px;
  line-height: 20px;
  margin-right: 10px;
`;

const Value = styled(CommonStyles.Text)`
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
`;

const LinkWrapper = styled(CommonStyles.Container)`
  margin-top: 40px;
  padding-horizontal: 0;
  padding-vertical: 0;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Link = styled(CommonStyles.Link)``;

export default {
  SafeAreaContainer,
  List,
  CardContentContainer,
  PricesContainer,
  Wrapper,
  Label,
  Value,
  LinkWrapper,
  Link,
};
