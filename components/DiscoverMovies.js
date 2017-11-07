
import React, {Component, PureComponent} from 'react';
import { Container, Title } from 'native-base';
import MoviesPage from './MoviesPage';
import MovieType from './MovieType';
import LoadingCompWrapper from './../containers/LoaderWrapper';

const MoviesListLoader = LoadingCompWrapper(MoviesPage);

const keyExtractor = (item, index) => index;

class DiscoverMovies extends PureComponent {
  // componentWillMount() {
  //   const { fetchingData } = this.props;
  //   fetchingData(1);
  // }
  renderListItem = ({item}) => (
    <MovieType item={item} getMovieType={this.getMovieType}/>
  );

  getMovieType = (item) => {
    console.log('item clicked', item);
    this.props.navigation.navigate('ExploreMovies', item);
  }


  render () {
    return (
      <MoviesListLoader
        renderListItems={this.renderListItem}
        renderFooter={null}
        fetchNextPage={null}
        keyExtractor={keyExtractor}
        {...this.props}/>
    );
  }
};

export default DiscoverMovies;
