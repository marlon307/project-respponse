import { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  bagItems: Array<Object>;
  value: Number;
}

// Define the initial state using that type
const stateBag: CounterState = {
  bagItems: [],
  value: 0,
};

const ADD_BAG_ITEMS = (state: CounterState, { payload }: PayloadAction<Object>) => {
  state.bagItems.unshift(payload);
};

export { stateBag, ADD_BAG_ITEMS };
