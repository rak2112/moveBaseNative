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
export const movies = ( state = initialStateMovies, action) => { console.log('action in movies', action);
  switch (action.type) {
    case 'FETCHING_DATA_DEFAULT':
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
    case 'DATA_FETCHED_DEFAULT':
      return {
        ...state,
        isFetching: false,
        hasError: false,
        pageNo: action.res['page'],
        totalItems: action.res['total_results'],
        totalPages:action.res['total_pages'],
        items: action.res['results']
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

const initialStateExplore = {isFetching:true, hasError: false, pageNo:1, totalPages: 1, items: [], totalItems:[]};
export const exploreMovies = ( state = initialStateExplore, action) => { console.log('action in explore', action);
  switch (action.type) {
    case 'FETCHING_DATA_OTHER':
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
    case 'DATA_FETCHED_OTHER':
      return {
        ...state,
        isFetching: false,
        hasError: false,
        pageNo: action.res['page'],
        totalItems: action.res['total_results'],
        totalPages:action.res['total_pages'],
        items: action.res['results']
      }
    case 'NEXT_PAGE_DATA_OTHER':
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

const moviesFound = {isFetching: false, items:[], defaultInputValue: null};
export const searchedMovies = (state = moviesFound, action) => {
  switch(action.type) {
    case 'SEARCH_FOR_MOVIES':
      return {
        ...state,
        defaultInputValue: action.movie,
        isFetching: true
      }
    case 'MOVIES_SEARCHED':
      return {
        ...state,
        isFetching: false,
        items: action.res['results'].filter(item=> item.media_type === 'movie')
      }
    case 'RESET_QUICK_SEARCH':
      console.log('resettting.....')
      return {
        ...state,
        defaultInputValue: null,
        isFetching: false,
        items:[]
      }
    default:
      return state;
  }
}

const moviesTypes = {
  movies:[
    {id: 6, name: 'In Cinemas', bColor: '#8ac52b', sColor: '#00d573', image: '', type: 'inCinemas'},
    {id: 2, name: 'Up Coming', bColor: '#fefe2a', sColor: '#fefe2a', image: 'greatFulColorReady.jpg', type: 'upComing'},
    {id: 3, name: 'Popular Choice', bColor: '#fff', sColor: '#4c4c4c', image: '', type: 'popular' },
    {id: 7, name: 'Top Rated', bColor: '#863a9e', sColor: '#00d573', image: '', type: 'topRated'},
    {id: 4, name: 'Action', bColor: '#1f4785', sColor: '#F17F42', image: '', type: 'action'},
    {id: 5, name: 'Comedy', bColor: '#ffdd53', sColor: '#00d573', image: '', type: 'comedy'},
    {id: 1, name: 'Latest', bColor: '#f96d00', sColor: '#F17F42', image: '', type: 'latest'},
  ]
};

export const discoverMovies = (state= moviesTypes) =>{
  return state;
}
