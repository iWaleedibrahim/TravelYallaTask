

import TYPES from '../constants/types';
import STORAGE_KEYS from '../constants/storage_keys';
import {
  getDataFromLocalStorage,
  setDataToLocalStorage
} from '../utils/AsyncStorage'
import data from '../data/data.json'


export function getCategories() {
  return async function (dispatch) {

    /*
     *  We was supposed to dispatch loading type and set temporoary loading 
     *  flag as we are going to perform data fetching task in the blew lines,
     *  but as we use async storage to retrive data and it is real time in most
     *  modern mobile devices, we decided to eliminate the loading behavior.
     */

    // dispatch({ type: TYPES.GET_CATOGRIES_PENDING });
    getDataFromLocalStorage(STORAGE_KEYS.CATEOGRIES).then(data_from_storage => {
      if (!data_from_storage) {
        setDataToLocalStorage(STORAGE_KEYS.CATEOGRIES, data.categories)
        dispatch({ type: TYPES.GET_CATEGORIES_SUCCESS, data: data.categories });
      } else {
        dispatch({ type: TYPES.GET_CATEGORIES_SUCCESS, data: data_from_storage });
      }
    }).catch((error) => {
      dispatch({
        type: TYPES.ERROR_GETTING_CATEGORIES,
        error: error,
      });
    })
  };
};


export function addNewCateogry(categoryName, categoryDesc) {
  return async function (dispatch) {
    /* 
     * see comment above ^
     */

    // dispatch({ type: TYPES.ADD_NEW_CATOGRY_PENDING }); 

    try {
      let categories_collection = await getDataFromLocalStorage(STORAGE_KEYS.CATEOGRIES);

      let categories_count = categories_collection?.length 

      if (categories_collection) {
        console.warn("last id", categories_collection[categories_collection.length - 1].id)
        categories_collection.push(
          {
            id: (categories_collection[categories_collection.length - 1].id - 1000) + Math.floor(Math.random() * (1000 + 1)),
            name: categoryName,
            desc: categoryDesc,
            movies: []
          });
          console.warn("next id", categories_collection[categories_collection.length - 1].id + 1)
      }

      if (categories_collection.length > categories_count) {
        setDataToLocalStorage(STORAGE_KEYS.CATEOGRIES, categories_collection)
        dispatch({ type: TYPES.ADD_NEW_CATOGRY_SUCCESS, data: categories_collection });
      }
    } catch (error) {
      dispatch({
        type: TYPES.ERROR_ADDING_NEW_CATOGRY,
        error: error,
      });
    }
  };
}



export function getMoviesByCateogryId(categoryId) {
  return async function (dispatch) {
    getDataFromLocalStorage(STORAGE_KEYS.CATEOGRIES).then(data_from_storage => {
      if (data_from_storage) {

        let category = data_from_storage.find(item => item.id == categoryId)
        let movies = category?.movies ? category?.movies : []

        dispatch({ type: TYPES.GET_MOVIES_SUCCESS, data: movies });

      } else {
        dispatch({
          type: TYPES.GET_MOVIES_ERROR,
          error: error,
        });
      }
    }).catch((error) => {
      dispatch({
        type: TYPES.GET_MOVIES_ERROR,
        error: error,
      });
    })
  };
}

export function addNewMovieToCateogryById(name, rate, desc, categoryId) {
  return async function (dispatch) {
    try {
      let categories_collection = await getDataFromLocalStorage(STORAGE_KEYS.CATEOGRIES);

      let category = categories_collection.find(item => item.id == categoryId)
      let movies = category?.movies ? category?.movies : []
      let movies_count = movies.length
        movies.push(
          {
            id: movies.length == 0 ? 10000 : (movies[movies.length - 1].id - 1000) + Math.floor(Math.random() * (100000 + 1)),
            name: name,
            rate: rate,
            description: desc
          })

      if (movies.length > movies_count) {
        dispatch({ type: TYPES.ADD_NEW_MOVIE_SUCCESS, data: movies });
        setDataToLocalStorage(STORAGE_KEYS.CATEOGRIES, categories_collection)
      } else {
        dispatch({
          type: TYPES.ERROR_ADDING_NEW_MOVIE,
          error: error,
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.ERROR_ADDING_NEW_MOVIE,
        error: 'Error While trying to add new movie',
      });
    }
  };
}


export function deleteMovieItem(itemId, categoryId ) {
  return async function (dispatch) {
    try {
      let categories_collection = await getDataFromLocalStorage(STORAGE_KEYS.CATEOGRIES);

      let category = categories_collection.find(item => item.id == categoryId)
      let movies = category?.movies ? category?.movies : []
      let movies_count = movies.length

      movies = movies.filter( item => item.id !== itemId)

      let current_cat_index = categories_collection.indexOf(category)

      categories_collection[current_cat_index].movies = movies

      if (movies.length < movies_count) {
        dispatch({ type: TYPES.DELETE_MOVIE_SUCCESS, data: movies });
        setDataToLocalStorage(STORAGE_KEYS.CATEOGRIES, categories_collection)
      } else {
        dispatch({
          type: TYPES.ERROR_DELETING_MOVIE,
          error: 'Error While trying to remove this movie',
        });
      }
    } catch (error) {
      dispatch({
        type: TYPES.ERROR_DELETING_MOVIE,
        error: error,
      });
    }
  };
}


export function editMovieItem(itemId) {
  return async function (dispatch) {
  };
}


