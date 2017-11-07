import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {paths} from './../constants/locationSvc';
import { connect } from 'react-redux'
import { fetchingData, fetchMoreData } from './../actions/movieActions';
import DiscoverMovies from './../components/DiscoverMovies';

// const propTypes = {
//   pageNo: PropTypes.number.isRequired,
//   totalPages: PropTypes.number,
//   items : PropTypes.arrayOf(PropTypes.object.isRequired),
//   pageName: PropTypes.string,
//   isFetching: PropTypes.bool.isRequired,
//   hasError: PropTypes.bool.isRequired,
//   errorStatus: PropTypes.string
// };

export const Discover = props => <DiscoverMovies {...props} />;

function mapStateToProps (state) {
  const { discoverMovies } = state;
  const { movies:items } = discoverMovies;
  return {
    items
  };
}

//Discover.propTypes = propTypes;

export default connect(
  mapStateToProps
)(DiscoverMovies);
