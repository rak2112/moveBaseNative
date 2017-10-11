import { paths } from './../constants/locationSvc';
// import toFromDates from './../utils/toFromDates';



export const movieSearched = (res) => ({ type: 'MOVIES_SEARCHED', res});

export const resetQuickSearch = () => ({ type: 'RESET_QUICK_SEARCH'});

export const loadSuccess = (res, pageNo) => ({ type: 'FETCHING_DATA_SUCCESS', res, pageNo});

export const loadError = res => ({ type: 'FETCHING_DATA_FAILURE', res});

export const fetchMoreData = pageNo => ({ type: 'FETCH_NEXT_PAGE', pageNo});

export const fetchingData = (pageNo=1) => ({ type: 'FETCHING_DATA', pageNo});

export const fetchMovieDetails = id => ({ type:'FETCHING_DETAILS', id:id });

export const loadSuccessDetails = ([details, videos, casts]) => { console.log('detailsssssss action', details)
  let res = { details, videos, casts };
  return { type: 'DETAILS_LOADED', res};
};
