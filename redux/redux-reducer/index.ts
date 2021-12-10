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
  adderessSelected: {
    name: 'Entregar para',
    road: '---',
    district: '---',
    number: '---',
    uf: '---',
    city: '---',
    zipcode: '---',
  },
};

// USER REDUCER
const userReducer = (state = initialUserState, { type, payload }: IUserAction) => {
  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        authenticated: payload.auth,
        logged: payload.log,
      };
    case types.LOGOUT:
      return {
        ...state,
        authenticated: payload.auth,
        logged: payload.log,
      };
    case types.SELECT_ADDERESS:
      return {
        ...state,
        adderessSelected: payload,
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

const application = (state = intialStateApp, { type, payload }: IAppAction) => {
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
