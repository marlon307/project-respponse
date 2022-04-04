import { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  name: string;
  logged: boolean;
}

// Define the initial state using that type
const stateUser: CounterState = {
  name: 'Nome',
  logged: false,
};

const LOGIN_USER = (state: CounterState, { payload }: PayloadAction<boolean>) => {
  state.logged = payload;
};

export { LOGIN_USER, stateUser };
