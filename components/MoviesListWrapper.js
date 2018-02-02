//@flow
import React, {Component, PureComponent} from 'react';
import MoviesPage from './MoviesPage';
import MovieInList from './MovieInList';
import LoadingCompWrapper from './../containers/LoaderWrapper';
import { Spinner } from 'native-base';

type Props = {
  isFetching: boolean,
  pageNo: number,
  fetchingData(number, string | typeof undefined): void,
  fetchMoreData(number, string | typeof undefined): void,
  item: {
    title: string,
    backdrop_path: string,
    release_date: string,
    vote_average: number
  },
  navigation: {
    state: {
      params: {
        id?: string,
        bColor?: string,
        date?: Date,
        type?: string
      }
    },
    navigate(): void
  }
};

const MoviesListLoader = LoadingCompWrapper(MoviesPage);

const keyExtractor = (item, index) => index;

class MoviesListWrapper extends PureComponent <Props>{
  componentWillMount() {
    const { fetchingData, navigation:{state:{params}} } = this.props;
    const movieType: string = (params && params.type) ? params.type : 'defaultUrl';
    fetchingData(1, movieType);
  }
  fetchNextPage () {
    const { pageNo, fetchMoreData, navigation:{state:{params}} } = this.props;
    const movieType: string = (params && params.type) ? params.type : 'defaultUrl';
    fetchMoreData((pageNo+1), movieType);
  }
  renderFooter() {
    return <Spinner color='green'/>
  }
  renderListItems = ({item}: Object): React$Node => (
    <MovieInList item={item} navigation={this.props.navigation}/>
  );
  render () {
    const { isFetching } = this.props;
    return (
      <MoviesListLoader
        renderListItems={this.renderListItems}
        renderFooter={this.renderFooter}
        fetchNextPage={this.fetchNextPage.bind(this)}
        keyExtractor={keyExtractor}
        {...this.props}/>
    );
  }
};

export default MoviesListWrapper;
