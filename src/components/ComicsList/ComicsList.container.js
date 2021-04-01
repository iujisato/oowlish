import React, { PureComponent } from 'react';

import { compose } from '../../helpers/functionHelper';
import { withAppStateConsumer } from '../../providers/AppStateProvider';
import { getComics } from '../../services/MarvelApiService';

import ComicsList from './ComicsList.native';

const ITEMS_PER_PAGE = 10;

class ComicsListContainer extends PureComponent {
  state = {
    comicsListData: [],
    totalPages: 1,
    currentPage: 1,
    lastPage: false,
    error: '',
  };

  async componentDidMount() {
    this.setTotalPages();
    this.setComicsData();
  }

  setComicsData = async () => {
    const { currentPage, totalPages } = this.state;

    if (currentPage > totalPages) {
      this.setState({ lastPage: true });
      return;
    }

    try {
      const response = await this.getComicsData();
      const { results } = response.data;

      const comicsListData = this.parseComicsResultsData(results);

      this.setState((prevState) => ({
        comicsListData: prevState.comicsListData.concat(comicsListData),
      }));
    } catch (error) {
      this.setState({ error: 'There was an error, please try again later.' });
    }
  }

  parseComicsResultsData = (comicsData) => (
    comicsData.map((comicData) => ({
      title: comicData.title,
      prices: comicData.prices,
      thumbnail: comicData.thumbnail,
      issueNumber: comicData.issueNumber,
      url: comicData.urls.find((data) => data.type === 'detail').url,
    }))
  )

  getComicsData = () => {
    const { currentPage } = this.state;
    const { appStateContext } = this.props;

    const { characterData: { id } } = appStateContext;

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    return getComics(id, offset);
  }

  setNextPage = (callback) => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
    }), callback);
  }

  setTotalPages = () => {
    const { appStateContext } = this.props;
    const { characterData: { comics } } = appStateContext;

    this.setState({ totalPages: Math.ceil(comics / ITEMS_PER_PAGE) });
  }

  loadMore = () => {
    this.setNextPage(this.setComicsData);
  }

  render() {
    const { comicsListData, lastPage } = this.state;

    return (
      <ComicsList
        data={comicsListData}
        loadMore={this.loadMore}
        renderCount={ITEMS_PER_PAGE}
        lastPage={lastPage}
      />
    );
  }
}

export default compose(
  withAppStateConsumer,
)(ComicsListContainer);
