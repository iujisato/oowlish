import React from 'react';

import Styled from './ComicsList.styles';
import ComicsListContainer from './ComicsList.container';

const ComicsListScene = () => (
  <Styled.SafeAreaContainer>
    <ComicsListContainer />
  </Styled.SafeAreaContainer>
);

export default ComicsListScene;
