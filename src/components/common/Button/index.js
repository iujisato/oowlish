import React from 'react';

import Styled from './Button.styles';

const ButtonContainer = (props) => {
  const { onPress, title } = props;

  return (
    <Styled.TouchableOpacity onPress={onPress}>
      <Styled.Text>{title}</Styled.Text>
    </Styled.TouchableOpacity>
  );
};

export default ButtonContainer;
