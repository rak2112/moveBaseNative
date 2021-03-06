import { paths } from './../constants/locationSvc';
import { FETCHING_DATA } from './../constants/actionTypes';
import { loadSuccessInitial, loadSuccess, loadError, loadSuccessDetails, movieSearched, resetQuickSearch } from './../actions/movieActions';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { ajax } from 'rxjs/observable/dom/ajax'
import 'rxjs'
import { Observable } from 'rxjs/Observable'

export const fetchMoviesEpic = (action$, store) =>
  action$.ofType('FETCHING_DATA_DEFAULT')
    .mergeMap(action =>
      ajax.getJSON(action.url)
        .map(res => loadSuccessInitial(res, action.movieType))
    )
export const fetchExploreEpic = (action$, store) =>
action$.ofType('FETCHING_DATA_OTHER')
  .mergeMap(action =>
    ajax.getJSON(action.url)
      .map(res => loadSuccessInitial(res, action.movieType))
  )
//'FETCH_NEXT_PAGE'

export const fetchNextPageEpic = action$ =>
  action$.ofType('FETCH_NEXT_PAGE')
    .mergeMap(action =>
      ajax.getJSON(action.url)
        .map(res => loadSuccess(res, action.movieType))
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
        .map(res => movieSearched(res))
        .catch(err => Observable.of(resetQuickSearch()) )
    )
