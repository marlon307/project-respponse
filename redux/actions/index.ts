import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { stateUser, ACTION_LOGIN_USER } from './user';
import {
  stateBag, ACTION_ADD_BAG_ITEMS, ACTION_RM_BAG_ITEM,
  ACTION_EDIT_BAG_ITEM, ACTION_FINISH_EDIT_BAG_ITEM,
  ACTION_SELECT_SHIPPING,
} from './bag';

export const userSlice = createSlice({
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
    RM_BAG_ITEM: ACTION_RM_BAG_ITEM,
    EDIT_BAG_ITEM: ACTION_EDIT_BAG_ITEM,
    FINISH_EDIT_BAG_ITEM: ACTION_FINISH_EDIT_BAG_ITEM,
    SELECT_SHIPPING: ACTION_SELECT_SHIPPING,
  },
});

export const {
  LOGIN_USER,
} = userSlice.actions;

export const {
  ADD_BAG_ITEMS,
  RM_BAG_ITEM,
  EDIT_BAG_ITEM,
  FINISH_EDIT_BAG_ITEM,
  SELECT_SHIPPING,
} = bagSlice.actions;

export const selecRootState = (state: RootState) => state;

export default {
  user: userSlice.reducer,
  bag: bagSlice.reducer,
};
