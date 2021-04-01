import React from 'react';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
} from 'react-native-material-cards';

const MediaCardContainer = (props) => {
  const { uri, title, children } = props;

  return (
    <Card>
      <CardImage source={{ uri }} resizeMode="cover" />
      <CardTitle title={title} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default MediaCardContainer;
