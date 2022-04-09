import { PayloadAction } from '@reduxjs/toolkit';
import type { StateUserType } from './types/user';

// Define the initial state using that type
const stateUser: StateUserType = {
  name: 'Nome',
  logged: true,
};

const ACTION_LOGIN_USER = (state: StateUserType, { payload }: PayloadAction<boolean>) => {
  state.logged = payload;
};

export { ACTION_LOGIN_USER, stateUser };
