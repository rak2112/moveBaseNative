import { combineEpics } from 'redux-observable';
import { fetchMoviesEpic, fetchNextPageEpic, fetchMovieDetailsEpic } from './movieList_Epic.js';

export default rootEpic = combineEpics(
  fetchMoviesEpic,
  fetchNextPageEpic,
  fetchMovieDetailsEpic
);
