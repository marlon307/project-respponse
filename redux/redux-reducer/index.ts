import { combineReducers } from 'redux';
import * as types from '../types';

// INITIAL TIMER STATE
interface IReducerAction {
  type: string,
  payload: {
    auth: string;
    log: boolean;
  },
}

const initialUserState = {
  authenticated: '',
  logged: false,
};

// TIMER REDUCER
const userReducer = (state = initialUserState, { type, payload }: IReducerAction) => {
  switch (type) {
    case types.LOGIN:
      return {
        authenticated: payload.auth,
        logged: payload.log,
      };
    case types.LOGOUT:
      return {
        authenticated: payload.auth,
        logged: payload.log,
      };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  user: userReducer,
  // application: counterReducer,
};

export default combineReducers(reducers);
