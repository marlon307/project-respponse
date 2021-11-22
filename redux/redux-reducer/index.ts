import { combineReducers } from 'redux';
import * as types from '../types';

// INITIAL TIMER STATE
interface IUserAction {
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
const userReducer = ({ type, payload }: IUserAction, state = initialUserState) => {
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

interface IAppAction {
  type: string,
  payload: {
    filter: Array<Object>;
  },
}

const intialStateApp = {
  filter: [],
};

const application = ({ type, payload }: IAppAction, state = intialStateApp) => {
  switch (type) {
    case types.ADDFILTER:
      return {
        filter: [...state.filter, payload],
      };
    default:
      return state;
  }
};
// COMBINED REDUCERS
const reducers = {
  user: userReducer,
  application,
};

export default combineReducers(reducers);
