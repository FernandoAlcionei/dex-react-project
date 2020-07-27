import { all } from 'redux-saga/effects';
import { comicListSagas } from '../containers/comic-list/sagas';
import { comicDetailsSagas } from '../containers/comic-details/sagas';

export default function* rootSaga() {
  yield all([
    ...comicListSagas,
    ...comicDetailsSagas,
  ]);
}
