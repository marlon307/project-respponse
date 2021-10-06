import { combineReducers } from 'redux';
import * as types from '../types';

// // COUNTER REDUCER
// const counterReducer = (state = 0, { type }: any) => {
//   switch (type) {
//     case types.INCREMENT:
//       return state + 1;
//     default:
//       return state;
//   }
// };

// INITIAL TIMER STATE
const initialUserState = {
  authenticated: '',
  logged: false,
};

// TIMER REDUCER
const userReducer = (state = initialUserState, { type, payload }: any) => {
  switch (type) {
    case types.LOGIN:
      return {
        authenticated: payload.auth,
        logged: !!payload.log,
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
