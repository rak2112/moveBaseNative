//@flow
type detailState = {
  +errorDetails: boolean,
  +isFetching:boolean,
  +utubeKey:null,
  +details:{},
  +videos:{},
  +cast:Array<{}>,
  +crew:Array<{}>

};
type Action = any; //:TODO abstract the actions from movieActions and import here
const initialStateDetails = {
  errorDetails: false,
  isFetching:true,
  utubeKey:null,
  details:{},
  videos:{},
  cast:[],
  crew:[]
};
export const getDetails = (state: detailState = initialStateDetails , action: Action) => {
  switch (action.type) {
    case 'FETCHING_DETAILS':
      return {...state, isFetching: true}
    case 'ERROR_DETAILS':
      return {...state, errorDetails: true}
    case 'DETAILS_LOADED':
      return {
        ...state,
        isFetching: false,
        details: action.res.details,
        videos: action.res.videos,
        cast: action.res.casts.cast.filter(person => person.order < 7),
        crew: action.res.casts.crew.filter((person, index) => index < 7)
      }
    default :
      return state;
  }
}

type movieState = {
  +isFetching: boolean,
  +hasError: boolean,
  +pageNo: number,
  +items: Array<{}>
};
const initialStateMovies = {isFetching:true, hasError: false, pageNo:1, totalPages: 1, items: []};
export const movies = ( state: movieState = initialStateMovies, action: Action) => { console.log('action in movies', action);
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
        items: action.res['results']
      }
    case 'NEXT_PAGE_DATA_SUCCESS':
      return {
        ...state,
        isFetching: false,
        hasError: false,
        pageNo: action.res['page'],
        items: [...state.items, ...action.res['results']]
      }
    default :
      return state;
  }
}

const initialStateExplore = {isFetching:true, hasError: false, pageNo:1, items: []};
export const exploreMovies = ( state: movieState = initialStateExplore, action: Action) => { console.log('action in explore', action);
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
    case 'NEXT_PAGE_DATA_SUCESS_OTHER':
      return {
        ...state,
        isFetching: false,
        hasError: false,
        pageNo: action.res['page'],
        totalPages:action.res['total_pages'],
        items: [...state.items, ...action.res['results']]
      }
    default :
      return state;
  }
}

type foundMoviesState = {
  +isFetching: boolean, +items:Array<{}>, +defaultInputValue: null
};
const moviesFound = {isFetching: false, items:[], defaultInputValue: null};
export const searchedMovies = (state: foundMoviesState = moviesFound, action: Action) => {
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
    {id: 3, name: 'Popular Choice', bColor: '#fff', sColor: '#4c4c4c', image: '', type: 'popular' },
    {id: 6, name: 'In Cinemas', bColor: '#8ac52b', sColor: '#00d573', image: '', type: 'inCinemas'},
    {id: 7, name: 'Top Rated', bColor: '#863a9e', sColor: '#00d573', image: '', type: 'topRated'},
    {id: 2, name: 'Up Coming', bColor: '#fefe2a', sColor: '#fefe2a', image: 'greatFulColorReady.jpg', type: 'upComing'},
    {id: 1, name: 'Latest', bColor: '#f96d00', sColor: '#F17F42', image: '', type: 'latest'},
    // {id: 4, name: 'Action', bColor: '#1f4785', sColor: '#F17F42', image: '', type: 'action'},
    // {id: 5, name: 'Comedy', bColor: '#ffdd53', sColor: '#00d573', image: '', type: 'comedy'},
  ]
};
export const discoverMovies = () =>{
  return moviesTypes;
}
