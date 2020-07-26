import { createReducer } from 'reduxsauce';
import * as types from './actionTypes';

const INITIAL_STATE = {
  loadingView: false,
  products: [],
};

const clearReducer = () => ({ ...INITIAL_STATE });

const loading = (state = INITIAL_STATE, action) => ({
  ...state,
  loadingView: action.payload.loading,
});

const addComics = (state = INITIAL_STATE, action) => ({
  ...state,
  products: action.payload.comics,
});

export const productListReducer = createReducer(INITIAL_STATE, {
  [types.CLEAR_REDUCER]: clearReducer,
  [types.LOADING]: loading,
  [types.ADD_PRODUCTS]: addComics,
});
