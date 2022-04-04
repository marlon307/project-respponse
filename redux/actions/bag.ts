import { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  bag: {
    bagItems: Array<Object>;
    value: Number;
  }
}

// Define the initial state using that type
const stateBag: CounterState = {
  bag: {
    bagItems: [],
    value: 0,
  },
};

const ADD_BAG_ITEMS = (state: CounterState, { payload }: PayloadAction<Object>) => {
  state.bag.bagItems.push(payload);
};

export { stateBag, ADD_BAG_ITEMS };
