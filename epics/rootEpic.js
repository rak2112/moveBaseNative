import { combineEpics } from 'redux-observable';
import { fetchMoviesEpic, fetchExploreEpic, fetchNextPageEpic, fetchMovieDetailsEpic, searchForMoviesEpic } from './movieList_Epic.js';

export default rootEpic = combineEpics(
  fetchMoviesEpic,
  fetchExploreEpic,
  fetchNextPageEpic,
  fetchMovieDetailsEpic,
  searchForMoviesEpic
);
