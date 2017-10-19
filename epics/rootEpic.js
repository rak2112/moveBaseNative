import { combineEpics } from 'redux-observable';
import { fetchMoviesEpic, fetchNextPageEpic, fetchMovieDetailsEpic, searchForMoviesEpic } from './movieList_Epic.js';

export default rootEpic = combineEpics(
  fetchMoviesEpic,
  fetchNextPageEpic,
  fetchMovieDetailsEpic,
  searchForMoviesEpic
);
