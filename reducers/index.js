import { combineReducers } from 'redux';
import {getDetails, movies, getGenres, searchedMovies} from './movieReducers';

const rootReducer = combineReducers({
  movies,
  searchedMovies,
  getGenres,
  getDetails
});

export default rootReducer;
