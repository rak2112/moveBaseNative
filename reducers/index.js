import { combineReducers } from 'redux';
import {getDetails, movies, getGenres, searchedMovies, discoverMovies, exploreMovies} from './movieReducers';

const rootReducer = combineReducers({
  movies,
  searchedMovies,
  getGenres,
  getDetails,
  discoverMovies,
  exploreMovies
});

export default rootReducer;
