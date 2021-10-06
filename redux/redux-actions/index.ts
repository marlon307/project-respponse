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

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({
  type: types.INCREMENT,
});
