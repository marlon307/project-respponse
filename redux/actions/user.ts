import { PayloadAction } from '@reduxjs/toolkit';
import type { StateUserType } from './types/user';

// Define the initial state using that type
const stateUser: StateUserType = {
  name: '',
  logged: false,
  token: '',
  email: '',
  user_id: '',
};

const ACTION_LOGIN_USER = (
  state: StateUserType,
  { payload }: PayloadAction<StateUserType>,
) => {
  state.logged = true;
  state.name = payload.name;
  state.email = payload.email;
  state.token = payload.token;
  state.user_id = payload.user_id;

  localStorage.setItem('data_user', JSON.stringify(payload));
};

const ACTION_LOGOUT_USER = () => {
  localStorage.clear();
  return stateUser;
};

export { ACTION_LOGIN_USER, ACTION_LOGOUT_USER, stateUser };
