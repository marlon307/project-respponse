import { PayloadAction } from '@reduxjs/toolkit';
import type { StateSearchType } from './types/search';

// Define the initial state using that type
const stateSearch: StateSearchType = {
  textSearch: 'Nome',
  listFilter: [],
};

const ACTION_TEXT_SEARCH = (state: StateSearchType, { payload }: PayloadAction<string>) => {
  state.textSearch = payload;
};

const ACTION_ADD_FILTER_LIST = (state: StateSearchType, { payload }: PayloadAction<any>) => {
  const key = Object.keys(payload)[0];
  const existItem = state.listFilter.find((element) => element[key] === payload[key]);

  if (existItem) {
    const newList = state.listFilter.filter((element) => element[key] !== payload[key]);
    state.listFilter = newList;
  } else {
    state.listFilter.unshift(payload);
  }
};

export { ACTION_TEXT_SEARCH, ACTION_ADD_FILTER_LIST, stateSearch };
