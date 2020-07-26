import { all } from 'redux-saga/effects';
import { productListSagas } from '../containers/comic-list/sagas';
import { productDetailsSagas } from '../containers/comic-details/sagas';

export default function* rootSaga() {
  yield all([
    ...productListSagas,
    ...productDetailsSagas,
  ]);
}
