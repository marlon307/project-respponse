import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface CounterState {
  user: {
    name: string;
    logged: boolean;
  }
  bag: {
    items: Array<Object>;
  };
}

// Define the initial state using that type
const initialState: CounterState = {
  user: {
    name: 'Nome',
    logged: false,
  },
  bag: {
    items: [],
  },
};

export const counterSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<boolean>) => {
      state.user.logged = payload;
    },
    removeItemBag: (state, { payload }: PayloadAction<Array<Object>>) => {
      state.bag.items.push(payload);
    },
  },
});

export const { loginUser, removeItemBag } = counterSlice.actions;

export const selectUserLogged = (state: RootState) => state;

export default counterSlice.reducer;
