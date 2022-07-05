import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { stateUser, ACTION_LOGIN_USER, ACTION_LOGOUT_USER } from './user';
import {
  stateBag, ACTION_ADD_BAG_ITEMS, ACTION_RM_BAG_ITEM,
  ACTION_EDIT_BAG_ITEM, ACTION_FINISH_EDIT_BAG_ITEM,
  ACTION_SELECT_SHIPPING, ACTION_SELECT_PAYMENT, ACTION_SELECT_ADDRESS,
} from './bag';

import { stateSearch, ACTION_TEXT_SEARCH, ACTION_ADD_FILTER_LIST } from './search';

export const userSlice = createSlice({
  name: 'USER',
  initialState: stateUser,
  reducers: {
    LOGIN_USER: ACTION_LOGIN_USER,
    LOGOUT_USER: ACTION_LOGOUT_USER,
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
    SELECT_PAYMENT: ACTION_SELECT_PAYMENT,
    SELECT_ADDRESS: ACTION_SELECT_ADDRESS,
  },
});

export const searchSlice = createSlice({
  name: 'SEARCH',
  initialState: stateSearch,
  reducers: {
    TEXT_SEARCH: ACTION_TEXT_SEARCH,
    ADD_FILTER_LIST: ACTION_ADD_FILTER_LIST,
  },
});

export const {
  LOGIN_USER,
  LOGOUT_USER,
} = userSlice.actions;

export const {
  ADD_BAG_ITEMS,
  RM_BAG_ITEM,
  EDIT_BAG_ITEM,
  FINISH_EDIT_BAG_ITEM,
  SELECT_SHIPPING,
  SELECT_PAYMENT,
  SELECT_ADDRESS,
} = bagSlice.actions;

export const {
  TEXT_SEARCH,
  ADD_FILTER_LIST,
} = searchSlice.actions;

export const selecRootState = (state: RootState) => state;

export default {
  user: userSlice.reducer,
  bag: bagSlice.reducer,
  search: searchSlice.reducer,
};
