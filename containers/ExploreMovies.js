import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {paths} from './../constants/locationSvc';
import { connect } from 'react-redux'
import { fetchingData, fetchMoreData } from './../actions/movieActions';
import MoviesListWrapper from './../components/MoviesListWrapper';

const propTypes = {
  pageNo: PropTypes.number.isRequired,
  totalPages: PropTypes.number,
  items : PropTypes.arrayOf(PropTypes.object.isRequired),
  pageName: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  errorStatus: PropTypes.string
};

export const ExploreMovies = props => <MoviesListWrapper {...props} />;

function mapStateToProps (state) {
  const { exploreMovies } = state;
  const { isFetching, hasError, errorStatus, items, pageNo, totalPages } = exploreMovies;
  return {
    items, isFetching, hasError, errorStatus, pageNo, totalPages
  };
}

ExploreMovies.propTypes = propTypes;

export default connect(
  mapStateToProps,
  {
    fetchingData,
    fetchMoreData
  }
)(ExploreMovies);
