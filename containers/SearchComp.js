import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native';

import MoviesPage from './../components/MoviesPage';
import MovieInList from './../components/MovieInList';

import SearchInput from './../components/SearchInput';
import { searchForMovies, resetQuickSearch } from './../actions/movieActions';
import { Spinner } from 'native-base';
import { Container, Header, Title, Button, Content, Input, Item, Text, Icon, View } from 'native-base';


const MoviesListLoader = LoadingCompWrapper(MoviesPage);
const keyExtractor = (item, index) => index;

export class SearchComp extends PureComponent {
  componentWillMount () {
    console.log('unmounting.... now...')
  }

  componentWillReceiveProps(prevProp, nextProp) {
    console.log('in hereee recive prop', this.props, 'prevProp', prevProp, 'nxtProp', nextProp);
    const { items, defaultInputValue, resetQuickSearch } = this.props;
    if(this.props.navigation.state.params && this.props.navigation.state.params.date !== prevProp.navigation.state.params.date) {
      resetQuickSearch();
    }
  }

  renderListItems = ({item}) => (
    <MovieInList item={item} navigation={this.props.navigation}/>
  );

  onChangeText = (text) => {
    //console.log('texttt', text, 'this', this);
    const {searchForMovies} = this.props;
    searchForMovies(text)
  }
  render() { //console.log('proppsssss', this.props);
    const { defaultInputValue } = this.props;
    return (
      <Container style={{backgroundColor: '#E8E8E8', flex: 1}}>
      <SearchInput style={{height: 60}} defaultInputValue = {defaultInputValue} onChangeText={this.onChangeText}/>
      <MoviesListLoader
        renderListItems={this.renderListItems}
        renderFooter={null}
        fetchNextPage={null}
        keyExtractor={keyExtractor}
        {...this.props}/>
      </Container>
    )
  }
}

function mapStateToProps (state) {
  const { defaultInputValue, isFetching, items } = state.searchedMovies;
  return {
    defaultInputValue, isFetching, items
  }
}
export default connect(
  mapStateToProps,
  {
    searchForMovies,
    resetQuickSearch
  }
)(SearchComp);
