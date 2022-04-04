import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { stateUser, LOGIN_USER } from './user';
import { stateBag, ADD_BAG_ITEMS } from './bag';

export const counterSlice = createSlice({
  name: 'user',
  initialState: stateUser,
  reducers: {
    ACTION_LOGIN_USER: LOGIN_USER,
  },
});

export const bagSlice = createSlice({
  name: 'bag',
  initialState: stateBag,
  reducers: {
    ACTION_ADD_BAG_ITEMS: ADD_BAG_ITEMS,
  },
});

export const {
  ACTION_LOGIN_USER,
} = counterSlice.actions;

export const {
  ACTION_ADD_BAG_ITEMS,
} = bagSlice.actions;

export const selecRootState = (state: RootState) => state;

export default {
  user: counterSlice.reducer,
  bag: bagSlice.reducer,
};
