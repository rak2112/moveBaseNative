export const getGenres = (state = {genres:[]}, action) => {
  switch (action.type) {
    case 'LOADING_GENRE':
    return {
      ...state,
      genres: action.res.genres
    }
    default: return state;
  }
}

const initialStateDetails = {
  errorDetails: false,
  isFetching:true,
  utubeKey:null,
  details:{},
  videos:{},
  castCrew:{}
};
export const getDetails = (state = initialStateDetails , action) => {
  switch (action.type) {
    case 'FETCHING_DETAILS':
      return {...state, isFetching: true}
    case 'ERROR_DETAILS':
      return {...state, errorDetails: true}
    case 'DETAILS_LOADED':
      return {
        ...state,
        isFetching: false,  details: action.res.details, videos: action.res.videos, castCrew:action.res.casts
      }
    default :
      return state;
  }
}

const initialStateMovies = {isFetching:true, hasError: false, pageNo:1, totalPages: 1, items: [], totalItems:[]};
export const movies = ( state = initialStateMovies, action) => {
  switch (action.type) {
    case 'FETCHING_DATA':
      return {
        ...state, isFetching: true
      }
    case 'FETCHING_DATA_FAILURE':
      return {
        ...state,
        hasError: true,
        isFetching: false,
        errorStatus: action.res.message
      }
    case 'FETCHING_DATA_SUCCESS':
      return {
        ...state,
        isFetching: false,
        hasError: false,
        pageNo: action.res['page'],
        totalItems: action.res['total_results'],
        totalPages:action.res['total_pages'],
        items: [...state.items, ...action.res['results']]
      }
    default :
      return state;
  }
}

const moviesFound = {moviesFound:[]};
export const searchedMovies = (state = moviesFound, action) => {
  switch(action.type) {
    case 'MOVIES_SEARCHED':
      return {
        ...state,
        moviesFound: action.res
      }
    case 'RESET_QUICK_SEARCH':
      return {
        ...state,
        moviesFound
      }
    default:
      return state;
  }
}
