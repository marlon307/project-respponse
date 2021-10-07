import * as types from '../types';

// INITIALIZES actionLogin ON CLIENT
export const actionLogin = () => (dispatch: Function) => setTimeout(() => {
  dispatch({
    type: types.LOGIN,
    payload: {
      auth: Date.now(),
      log: true,
    },
  });
}, 2000);

export const actionLogOut = () => (dispatch: Function) => {
  dispatch({
    type: types.LOGOUT,
    payload: {
      auth: '',
      log: false,
    },
  });
};
