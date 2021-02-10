import TYPES from '../constants/types';


const INTIAL_STATE = {
  storageCategories: [],
  movies: [],
  error: '',
}

/*
 * AS PER TASK REQUIRMENTS, WE DON'T NEED BUT ONLY ONE REDUCER
 * WE ALSO EMIMINATED LOADING HANDLING AS IT IS NOT NEEDED
*/

export const reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        storageCategories: action.data,
        error: '',
      };
    case TYPES.ADD_NEW_CATOGRY_SUCCESS:
      return {
        ...state,
        storageCategories: action.data,
        error: '',
      };
    case TYPES.ERROR_GETTING_CATEGORIES:
      return {
        ...state,
        error: action.error,
      };
    case TYPES.ERROR_ADDING_NEW_CATOGRY:
      return {
        ...state,
        error: action.error,
      };
    case TYPES.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.data,
        error: '',
      };
    case TYPES.ADD_NEW_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.data,
        error: '',
      };
    case TYPES.ERROR_ADDING_NEW_MOVIE:
      return {
        ...state,
        error: action.error
      };
    case TYPES.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.data,
        error: ''
      };
    case TYPES.ERROR_DELETING_MOVIE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

