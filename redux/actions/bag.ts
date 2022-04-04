import { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  bagItems: Array<Object>;
  valueBag: Number;
}

// Define the initial state using that type
const stateBag: CounterState = {
  bagItems: [],
  valueBag: 0,
};

const ADD_BAG_ITEMS = (state: CounterState, { payload }: PayloadAction<Object>) => {
  state.bagItems.unshift(payload);
};

export { stateBag, ADD_BAG_ITEMS };
