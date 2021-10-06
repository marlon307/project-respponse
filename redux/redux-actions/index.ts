import * as types from '../types';

// INITIALIZES actionLogin ON CLIENT
export const actionLogin = () => (dispatch: any) => {
  dispatch({
    type: types.LOGIN,
    payload: {
      auth: Date.now(),
      log: true,
    },
  });
};

export const actionLogOut = () => (dispatch: any) => {
  dispatch({
    type: types.LOGOUT,
    payload: {
      auth: '',
      log: false,
    },
  });
};
