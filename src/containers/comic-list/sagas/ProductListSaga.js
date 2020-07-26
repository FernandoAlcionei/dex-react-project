import { call, put } from 'redux-saga/effects';
import * as productListActions from '../actions';
import * as alertActions from '../../alert/actions';
import { alertTypes } from '../../../components/Alert';

export function* getComicList(api, { payload }) {
  const { search, t } = payload;

  yield put(productListActions.loading(true));

  const response = yield call(api.getComicList, search);

  if (response && response.ok) {
    const { data: { results } } = response.data;

    yield put(productListActions.addComics(results));
  } else {
    yield put(alertActions.addAlert(t('Serviço temporariamente indisponível'), alertTypes.error));
  }

  yield put(productListActions.loading(false));
}
