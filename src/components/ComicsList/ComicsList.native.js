import React, { PureComponent } from 'react';
import { ActivityIndicator } from 'react-native';

import Styled from './ComicsList.styles';
import MediaCard from '../common/MediaCard';
import { isEmpty, startCase } from '../../helpers/functionHelper';

class ComicsList extends PureComponent {
  renderLoading = () => {
    const { lastPage } = this.props;

    if (lastPage) {
      return null;
    }

    return (
      <ActivityIndicator size="large" />
    );
  }

  renderEmptyData = () => (
    <Styled.Label>This list is currently empty</Styled.Label>
  )

  renderPrices = (prices) => {
    if (!prices || isEmpty(prices)) {
      return null;
    }

    return (
      <Styled.PricesContainer>
        {prices.map((price, index) => (
          <Styled.Wrapper key={index}>
            <Styled.Label>{startCase(price.type)}</Styled.Label>
            <Styled.Value>{price.price}</Styled.Value>
          </Styled.Wrapper>
        ))}
      </Styled.PricesContainer>
    );
  }

  renderData = ({ item }) => {
    const {
      thumbnail,
      title,
      issueNumber,
      prices,
      url,
    } = item;
    const uri = `${thumbnail.path}.${thumbnail.extension}`.replace('http://', 'https://');

    return (
      <MediaCard uri={uri} title={title}>
        <Styled.CardContentContainer>
          <Styled.Wrapper>
            <Styled.Label>Issue Number</Styled.Label>
            <Styled.Value>{issueNumber}</Styled.Value>
          </Styled.Wrapper>

          {this.renderPrices(prices)}

          <Styled.LinkWrapper>
            <Styled.Link label="Check more details!" url={url} />
          </Styled.LinkWrapper>
        </Styled.CardContentContainer>
      </MediaCard>
    );
  }

  render() {
    const { data, renderCount, loadMore } = this.props;

    return (
      <Styled.List
        data={data}
        initialNumToRender={renderCount}
        renderItem={this.renderData}
        keyExtractor={(item) => item.title}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListEmptyContent={this.renderEmptyData}
        ListFooterComponent={this.renderLoading}
      />
    );
  }
}

export default ComicsList;
