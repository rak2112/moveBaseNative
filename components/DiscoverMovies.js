//@flow
import React, {Component, PureComponent} from 'react';
import { Container, Title } from 'native-base';
import MoviesPage from './MoviesPage';
import MovieType from './MovieType';
import LoadingCompWrapper from './../containers/LoaderWrapper';

const MoviesListLoader = LoadingCompWrapper(MoviesPage);

const keyExtractor = (item, index) => index;

type Props = {
  items: Array<{}>,
  navigation: {navigate(string, {}): void}
};

class DiscoverMovies extends PureComponent <Props> {
  renderListItem = ({item}: Object): React$Node => (
    <MovieType item={item} getMovieType={this.getMovieType}/>
  );

  getMovieType = (item: Object): void => {
    this.props.navigation.navigate('ExploreMovies', item);
  }


  render () {
    return (
      <MoviesListLoader
        renderListItems={this.renderListItem}
        keyExtractor={keyExtractor}
        {...this.props}/>
    );
  }
};

export default DiscoverMovies;
