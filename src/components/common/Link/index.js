import React, { PureComponent } from 'react';
import { Linking } from 'react-native';

import Styled from './Link.styles';

class LinkContainer extends PureComponent {
  onPress = async () => {
    const { url } = this.props;

    await Linking.openURL(url);
  }

  render() {
    const { label } = this.props;

    return (
      <Styled.TouchableOpacity onPress={this.onPress}>
        <Styled.Text>{label}</Styled.Text>
      </Styled.TouchableOpacity>
    );
  }
}

export default LinkContainer;
