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

const ACTION_ADD_FILTER_LIST = (state: StateSearchType, { payload }: PayloadAction<Object>) => {
  state.listFilter.unshift(payload);
};

export { ACTION_TEXT_SEARCH, ACTION_ADD_FILTER_LIST, stateSearch };
