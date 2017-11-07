import React, {Component, PureComponent} from 'react';
import MoviesPage from './MoviesPage';
import MovieInList from './MovieInList';
import LoadingCompWrapper from './../containers/LoaderWrapper';
import { Spinner } from 'native-base';

const MoviesListLoader = LoadingCompWrapper(MoviesPage);

const keyExtractor = (item, index) => index;

class MoviesListWrapper extends PureComponent {
  componentWillMount() {
    const { fetchingData, navigation:{state:{params}} } = this.props;
    if(params && params.type) { console.log(' i have the params', params)
      fetchingData(1, params.type);
    }
    else {
      fetchingData(1, 'defaultUrl');
    }
  }
  fetchNextPage () {
    const {pageNo, fetchMoreData} = this.props;
    fetchMoreData((pageNo+1));
  }
  renderFooter() {
    return <Spinner color='green'/>
  }
  renderListItems = ({item}) => (
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
