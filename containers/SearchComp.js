//@flow
import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native';
// import type { ReactClass } from 'react';
import LoadingCompWrapper from './LoaderWrapper';
import MoviesPage from './../components/MoviesPage';
import MovieInList from './../components/MovieInList';

import SearchInput from './../components/SearchInput';
import { searchForMovies, resetQuickSearch } from './../actions/movieActions';
import { Container } from 'native-base';


const MoviesListLoader = LoadingCompWrapper(MoviesPage);
const keyExtractor = (item, index) => index;

type Props = {
  isFetching: boolean,
  items: Array<{
    title: string,
    backdrop_path: string,
    release_date: string,
    vote_average: number
  }>,
  defaultInputValue: string,
  resetQuickSearch(): void,
  searchForMovies(text: string): void,
  navigation: {
    state: {
      params: {
        id?: string,
        bColor?: string,
        type?: string,
        date?: Date
      }
    },
    navigate(): void
  }
};
type State = {
  +searchedMovies: Props;
};

export class SearchComp extends PureComponent <Props>{
  componentWillReceiveProps(prevProp: any): mixed {
    const { resetQuickSearch, navigation:{ state:{ params:params }} } = this.props;
    const {navigation:{state:{params: prevParams}}} = prevProp;
    if(params && params.date !== prevParams.date) {
      resetQuickSearch();
    }
  }

  renderListItems = ({item}: Object): React$Node => (
    <MovieInList item={item} navigation={this.props.navigation}/>
  );

  onChangeText = (text: string) : void => {
    const {searchForMovies} = this.props;
    searchForMovies(text)
  }

  render() {
    const { defaultInputValue } = this.props;
    return (
      <Container style={{backgroundColor: '#E8E8E8', flex: 1}}>
        <SearchInput defaultInputValue = {defaultInputValue} onChangeText={this.onChangeText}/>
        <MoviesListLoader
          renderListItems={this.renderListItems}
          keyExtractor={keyExtractor}
          {...this.props}/>
      </Container>
    )
  }
}
const mapStateToProps = (state: State): {} => {
  const { defaultInputValue, isFetching, items } = state.searchedMovies;
  return {
    defaultInputValue, isFetching, items
  };
};
export default connect(
  mapStateToProps,
  {
    searchForMovies,
    resetQuickSearch
  }
)(SearchComp);
