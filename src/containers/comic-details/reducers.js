import { createReducer } from 'reduxsauce';
import * as types from './actionTypes';

const INITIAL_STATE = {
  loadingView: false,
  product: {},
};

const clearReducer = () => ({ ...INITIAL_STATE });

const loading = (state = INITIAL_STATE, action) => ({
  ...state,
  loadingView: action.payload.loading,
});

const addProduct = (state = INITIAL_STATE, action) => ({
  ...state,
  product: action.payload.product,
});

export const productDetailsReducer = createReducer(INITIAL_STATE, {
  [types.CLEAR_REDUCER]: clearReducer,
  [types.LOADING]: loading,
  [types.ADD_PRODUCT]: addProduct,
});
