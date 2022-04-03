import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface CounterState {
  userInfos: {
    name: string;
    logged: boolean;
  };
}

// Define the initial state using that type
const initialState: CounterState = {
  userInfos: {
    name: 'Nome',
    logged: false,
  },
};

export const counterSlice = createSlice({
  name: 'store',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<boolean>) => {
      state.userInfos.logged = payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { loginUser } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserLogged = (state: RootState) => state.stateLogin;

export default counterSlice.reducer;
