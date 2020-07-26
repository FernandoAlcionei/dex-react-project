import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { getComicDetails, buyProduct } from './ProductDetailsSaga';
import Api from '../../../api';

const api = Api.create();

export const productDetailsSagas = [
  takeLatest(types.SAGA_PRODUCT_DETAILS, getComicDetails, api),
  takeLatest(types.SAGA_BUY_PRODUCT, buyProduct),
];
