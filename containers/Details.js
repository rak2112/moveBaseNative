//@flow
import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import type { MapStateToProps } from 'react-redux';
import MovieDetail from './../components/MovieDetail';
import { fetchMovieDetails } from './../actions/movieActions';
import LoadingCompWrapper from './LoaderWrapper';

type Props = {
  navigation: {
    state: {
      params: {id: string}
    }
  },
  movieDetails: {
    isFetching: boolean,
    details: {
      title?: string,
      release_date?: string,
      vote_average?: number,
      overview?: string,
      genres: {
        id: number,
        name: string
      }
    }
  },
  fetchMovieDetails(string): void,
};

type State = {
  +getDetails: Object
};


const DetailsWithLoader = LoadingCompWrapper(MovieDetail);
export class Details extends PureComponent <Props>{
  componentWillMount(): void {
    const { fetchMovieDetails, navigation:{state:{params:{id}}} } = this.props;
    fetchMovieDetails(id)
  }
  render() {
    return (
      <DetailsWithLoader {...this.props.movieDetails}/>
    );
  }
}

const mapStateToProps:MapStateToProps<*,*,*> = (state: State) => {
  const { getDetails: movieDetails } = state;
  return {
    movieDetails
  };
};

export default connect (
  mapStateToProps,
  { fetchMovieDetails }
)(Details);
