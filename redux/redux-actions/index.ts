import * as types from '../types';

// INITIALIZES actionLogin ON CLIENT
export const actionLogin = () => (dispatch: Function) => {
  localStorage.setItem('data_user', JSON.stringify({
    logged: true,
  }));
  dispatch({
    type: types.LOGIN,
    payload: {
      auth: new Date(),
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

export const actionSlecteAdderess = (objectAddres: Object) => (dispatch: Function) => {
  dispatch({
    type: types.SELECT_ADDERESS,
    payload: objectAddres,
  });
};

export const addFilter = (object: Object) => (dispatch: Function) => {
  dispatch({
    type: types.ADDFILTER,
    payload: object,
  });
};

export const addBag = (object: Object) => (dispatch: Function) => {
  dispatch({
    type: types.ADD_BAG,
    payload: object,
  });
};
