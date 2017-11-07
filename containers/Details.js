import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import MovieDetail from './../components/MovieDetail';
import { fetchMovieDetails } from './../actions/movieActions';
import LoadingCompWrapper from './LoaderWrapper';

const propTypes =  {
  fetchMovieDetails: PropTypes.func.isRequired,
  movieDetails: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    details: PropTypes.shape({
      title: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
      }))
    })
  })
};

const DetailsWithLoader = LoadingCompWrapper(MovieDetail);
export class Details extends PureComponent {
  componentWillMount() {
    //const {id} = this.props.navigation.state.params;
    const { fetchMovieDetails, navigation:{state:{params:{id}}} } = this.props;
    fetchMovieDetails(id)
  }
  render() {
    const {isFetching} = this.props.movieDetails;
    return (
      <DetailsWithLoader {...this.props.movieDetails}/>
    );
  }
}

function mapStateToProps (state) {
  const {getDetails:movieDetails} = state;
  return {
    movieDetails
  };
};

Details.propTypes = propTypes;

export default connect (
  mapStateToProps,
  { fetchMovieDetails }
)(Details);
