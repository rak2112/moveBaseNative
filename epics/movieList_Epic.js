import { paths } from './../constants/locationSvc';
import { FETCHING_DATA } from './../constants/actionTypes';
import { loadSuccess, loadError, loadSuccessDetails, movieSearched, resetQuickSearch } from './../actions/movieActions';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { ajax } from 'rxjs/observable/dom/ajax'
import 'rxjs'
import { Observable } from 'rxjs/Observable'

export const fetchMoviesEpic = action$ =>
  action$.ofType('FETCHING_DATA')
    .mergeMap(action =>
      ajax.getJSON(`${paths.apiUrl}/discover/movie${paths.apiKey}&page=${action.pageNo}`)
        .map(res => {
          console.log('res in epicc', res);
          return loadSuccess(res, action.pageNo)
        })
    )
//'FETCH_NEXT_PAGE'

export const fetchNextPageEpic = action$ =>
  action$.ofType('FETCH_NEXT_PAGE')
    .mergeMap(action =>
      ajax.getJSON(`${paths.apiUrl}/discover/movie${paths.apiKey}&page=${action.pageNo}`)
        .map(res => {
          console.log('res in nxt page epicc', res);
          return loadSuccess(res, action.pageNo)
        })
    )

//Epic MovieDetails...

export const fetchMovieDetailsEpic = action$ =>
  action$.ofType('FETCHING_DETAILS')
    .mergeMap(action =>
      Observable.forkJoin(
        ajax.getJSON(`${paths.apiUrl}/movie/${action.id}${paths.apiKey}`),
        ajax.getJSON(`${paths.apiUrl}/movie/${action.id}/videos${paths.apiKey}`),
        ajax.getJSON(`${paths.apiUrl}/movie/${action.id}/casts${paths.apiKey}`)
    ).map(res => loadSuccessDetails(res)))



export const searchForMoviesEpic = action$ =>
  action$.ofType('SEARCH_FOR_MOVIES')
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap(action => console.log('movies', action) ||
      ajax.getJSON(`${paths.apiUrl}/search/multi${paths.apiKey}&language=en-US&query=${action.movie}`)
        .map(res => {
          console.log('res in search for movies..', res);
          return movieSearched(res)
        })
        .catch(err => Observable.of(resetQuickSearch()) )
    )
