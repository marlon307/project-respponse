import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { stateUser, ACTION_LOGIN_USER } from './user';
import { stateBag, ACTION_ADD_BAG_ITEMS } from './bag';

export const counterSlice = createSlice({
  name: 'USER',
  initialState: stateUser,
  reducers: {
    LOGIN_USER: ACTION_LOGIN_USER,
  },
});

export const bagSlice = createSlice({
  name: 'BAG',
  initialState: stateBag,
  reducers: {
    ADD_BAG_ITEMS: ACTION_ADD_BAG_ITEMS,
  },
});

export const {
  LOGIN_USER,
} = counterSlice.actions;

export const {
  ADD_BAG_ITEMS,
} = bagSlice.actions;

export const selecRootState = (state: RootState) => state;

export default {
  user: counterSlice.reducer,
  bag: bagSlice.reducer,
};
