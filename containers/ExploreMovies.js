//@flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {paths} from './../constants/locationSvc';
import { connect } from 'react-redux'
import { fetchingData, fetchMoreData } from './../actions/movieActions';
import MoviesListWrapper from './../components/MoviesListWrapper';

type Props = {
  isFetching: boolean,
  pageNo: number,
  items? : Array<{}>,
  hasError?: boolean,
  errorStatus?: string,
  fetchingData(number, string | typeof undefined): void,
  fetchMoreData(number): void,
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

type State = {
  +exploreMovies: Props
};

export const ExploreMovies = (props: Props) => <MoviesListWrapper {...props} />;

const mapStateToProps = (state: State): {} => {
  const { exploreMovies } = state;
  const { isFetching, hasError, errorStatus, items, pageNo } = exploreMovies;
  return {
    items, isFetching, hasError, errorStatus, pageNo
  };
};

export default connect(
  mapStateToProps,
  {
    fetchingData,
    fetchMoreData
  }
)(ExploreMovies);
