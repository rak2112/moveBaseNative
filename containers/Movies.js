//@flow
import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import {paths} from './../constants/locationSvc';
import { connect } from 'react-redux'
import { fetchingData, fetchMoreData } from './../actions/movieActions';
import MoviesListWrapper from './../components/MoviesListWrapper';

type Props = {
  isFetching: boolean,
  hasError?: boolean,
  pageNo: number,
  items? : Array<{}>,
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
  +movies: Props
};

export const Movies = (props: Props) => <MoviesListWrapper {...props} />;

const mapStateToProps = (state: State): {} => { console.log('state', state);
  const { movies } = state;
  const { isFetching, hasError, errorStatus, items, pageNo } = movies;
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
)(Movies);
