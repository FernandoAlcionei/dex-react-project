import { createReducer } from 'reduxsauce';
import * as types from './actionTypes';

const INITIAL_STATE = { alerts: [] };

const clearReducer = () => ({ ...INITIAL_STATE });

const addAlert = (state = INITIAL_STATE, action) => ({
  ...state,
  alerts: state.alerts.concat([action.payload.alert]),
});

const deleteAlert = (state = INITIAL_STATE, action) => {
  const { alerts } = state;
  const alertList = [];

  alerts.forEach((alert) => {
    if (alert.id !== action.payload.id) {
      alertList.push(alert);
    }
  });

  return ({ ...state, alerts: alertList });
};

export const alertReducer = createReducer(INITIAL_STATE, {
  [types.CLEAR_REDUCER]: clearReducer,
  [types.ADD_ALERT]: addAlert,
  [types.DELETE_ALERT]: deleteAlert,
});
