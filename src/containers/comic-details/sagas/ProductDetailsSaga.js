import { call, put } from 'redux-saga/effects';
import * as productDetailsActions from '../actions';
import * as alertActions from '../../alert/actions';
import { alertTypes } from '../../../components/Alert';

export function* getComicDetails(api, { payload }) {
  const { id, t } = payload;

  yield put(productDetailsActions.loading(true));

  const response = yield call(api.getComicDetails, id);

  if (response && response.ok) {
    const { data: { results } } = response.data;
    yield put(productDetailsActions.addProduct(results[0]));
  } else {
    yield put(alertActions.addAlert(t('Serviço temporariamente indisponível'), alertTypes.error));
  }

  yield put(productDetailsActions.loading(false));
}

export function* buyProduct({ payload }) {
  const { t } = payload;
  yield put(alertActions.addAlert(t('Pago recibido con éxito'), alertTypes.success));
}
