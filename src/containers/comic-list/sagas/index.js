import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { getComicList } from './ProductListSaga';
import Api from '../../../api';

const api = Api.create();

export const productListSagas = [
  takeLatest(types.SAGA_PRODUCT_LIST, getComicList, api),
];
