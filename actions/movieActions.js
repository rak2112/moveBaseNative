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


export const movieSearched = (res) => ({ type: 'MOVIES_SEARCHED', res});

export const resetQuickSearch = () => ({ type: 'RESET_QUICK_SEARCH'});

export const searchForMovies = (movie) => ({type: 'SEARCH_FOR_MOVIES', movie});

//export const loadSuccessInitial = (res, pageNo) => ({ type: 'FETCHING_DATA_SUCCESS_INITIAL', res, pageNo});

//need a seprate reducer or reset the original??
export const loadSuccessInitial = (res, type) => {
  return (type === 'defaultUrl') ? ({ type: 'DATA_FETCHED_DEFAULT', res }) : ({ type: 'DATA_FETCHED_OTHER', res });
};


export const loadSuccess = (res, pageNo) => ({ type: 'FETCHING_DATA_SUCCESS', res, pageNo});

export const loadError = res => ({ type: 'FETCHING_DATA_FAILURE', res});

export const fetchMoreData = pageNo => ({ type: 'FETCH_NEXT_PAGE', pageNo});

export const fetchingData = (pageNo=1, movieType) => {
  const url = urls(pageNo)[movieType]; console.log('url nowwww', url);
  //return { type: 'FETCHING_DATA', url, movieType};
  return (movieType === 'defaultUrl') ? ({ type: 'FETCHING_DATA_DEFAULT', url, movieType }) : ({ type: 'FETCHING_DATA_OTHER', url, movieType });
};

export const fetchMovieDetails = id => ({ type:'FETCHING_DETAILS', id:id });

export const loadSuccessDetails = ([details, videos, casts]) => { console.log('detailsssssss action', details)
  let res = { details, videos, casts };
  return { type: 'DETAILS_LOADED', res};
};
