import { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  user: {
    name: string;
    logged: boolean;
  }
}

// Define the initial state using that type
const stateUser: CounterState = {
  user: {
    name: 'Nome',
    logged: false,
  },
};

const LOGIN_USER = (state: CounterState, { payload }: PayloadAction<boolean>) => {
  state.user.logged = payload;
};

export { LOGIN_USER, stateUser };
