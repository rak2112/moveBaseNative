//@flow
import { paths } from './../constants/locationSvc';
import toFromDates from './../utils/toFromDates';

let {toDate, fromDate} = toFromDates();

const urls = (pageNo) => {
  return {
    upComing: `${paths.apiUrl}/movie/upcoming${paths.apiKey}&page=${pageNo}`,
    inCinemas: `${paths.apiUrl}/movie/now_playing${paths.apiKey}&language=en-US&page=${pageNo}`,
    popular: `${paths.apiUrl}/movie/popular${paths.apiKey}&language=en-US&page=${pageNo}`,
    latest: `${paths.apiUrl}/discover/movie?primary_release_date.gte=${toDate}&primary_release_date.lte=${fromDate}&api_key=60773f18ef6a7a9ee3d4a640fab964eb&page=${pageNo}`,
    topRated: `${paths.apiUrl}/movie/top_rated${paths.apiKey}&language=en-US&page=${pageNo}`,
    defaultUrl: `${paths.apiUrl}/discover/movie${paths.apiKey}&page=${pageNo}`
  }
};

type movieSearchedAction = { type: 'MOVIES_SEARCHED', res: Object};
type resetQuickSearchAction = { type: 'RESET_QUICK_SEARCH' };
type searchForMoviesAction = { type: 'SEARCH_FOR_MOVIES', movie: string };
type loadSuccessAction = { type: 'NEXT_PAGE_DATA_SUCCESS', res: Object } | { type: 'NEXT_PAGE_DATA_SUCESS_OTHER', res: Object };
type loadErrorAction = { type: 'FETCHING_DATA_FAILURE', res: Object};
type fetchMoreDataAction = { type: 'FETCH_NEXT_PAGE', pageNo: number};
type loadSuccessInitialAction = { type: 'DATA_FETCHED_DEFAULT', res: Object } | { type: 'DATA_FETCHED_OTHER', res: Object };
type fetchingDataAction = { type: 'FETCHING_DATA_DEFAULT', url:string, movieType:string } | { type: 'FETCHING_DATA_OTHER', url:string, movieType:string };
type fetchMovieDetailsAction = { type:'FETCHING_DETAILS', id: number};
type loadSuccessDetailsAction = { type: 'DETAILS_LOADED', res: Object};
type Action =
  | movieSearchedAction
  | resetQuickSearchAction
  | searchForMoviesAction
  | loadSuccessInitialAction
  | loadSuccessAction
  | loadErrorAction
  | fetchMoreDataAction
  | fetchingDataAction
  | fetchMovieDetailsAction
  | loadSuccessDetailsAction;

export const movieSearched = (res: Object): movieSearchedAction => ({ type: 'MOVIES_SEARCHED', res});

export const resetQuickSearch = (): resetQuickSearchAction => ({ type: 'RESET_QUICK_SEARCH'});

export const searchForMovies = (movie: string): searchForMoviesAction => ({type: 'SEARCH_FOR_MOVIES', movie});

//export const loadSuccessInitial = (res, pageNo) => ({ type: 'FETCHING_DATA_SUCCESS_INITIAL', res, pageNo});

//need a seprate reducer or reset the original??
export const loadSuccessInitial = (res: Object, type: string): loadSuccessInitialAction => {
  return (type === 'defaultUrl') ? ({ type: 'DATA_FETCHED_DEFAULT', res }) : ({ type: 'DATA_FETCHED_OTHER', res });
};


export const loadSuccess = (res: Object, type: string): loadSuccessAction => {
  return (type === 'defaultUrl') ? ({ type: 'NEXT_PAGE_DATA_SUCCESS', res }) : ({ type: 'NEXT_PAGE_DATA_SUCESS_OTHER', res });
};

export const loadError = (res: Object): loadErrorAction => ({ type: 'FETCHING_DATA_FAILURE', res});

export const fetchMoreData = (pageNo: number, movieType: string): fetchMoreDataAction => {
  const url = urls(pageNo)[movieType];
  return {type: 'FETCH_NEXT_PAGE', url, pageNo, movieType};
};

export const fetchingData = (pageNo:number=1, movieType: string): fetchingDataAction => {
  const url = urls(pageNo)[movieType]; console.log('url nowwww', url);
  //return { type: 'FETCHING_DATA', url, movieType};
  return (movieType === 'defaultUrl') ? ({ type: 'FETCHING_DATA_DEFAULT', url, movieType }) : ({ type: 'FETCHING_DATA_OTHER', url, movieType });
};

export const fetchMovieDetails = (id: number): fetchMovieDetailsAction => ({ type:'FETCHING_DETAILS', id});

export const loadSuccessDetails = ([details, videos, casts]: Array<{}>): loadSuccessDetailsAction => { console.log('detailsssssss action', details)
  let res = { details, videos, casts };
  return { type: 'DETAILS_LOADED', res};
};
