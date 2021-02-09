import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer } from './reducers/reducer';
import thunk from "redux-thunk";

const _reducer = combineReducers({
  mainReducer: reducer,
});

const store = createStore(_reducer, {}, applyMiddleware(thunk));

export default store;
