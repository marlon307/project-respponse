import * as types from '../types';

// INITIALIZES actionLogin ON CLIENT
export const actionLogin = () => (dispatch: Function) => {
  localStorage.setItem('data_user', JSON.stringify({
    logged: true,
  }));
  dispatch({
    type: types.LOGIN,
    payload: {
      auth: Date.now(),
      log: true,
    },
  });
};

export const actionLogOut = () => (dispatch: Function) => {
  localStorage.setItem('data_user', JSON.stringify({
    logged: false,
  }));
  dispatch({
    type: types.LOGOUT,
    payload: {
      auth: '',
      log: false,
    },
  });
};

export const addFilter = (object: Object) => (dispatch: Function) => {
  dispatch({
    type: types.ADDFILTER,
    payload: object,
  });
};
