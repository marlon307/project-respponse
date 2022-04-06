import { PayloadAction } from '@reduxjs/toolkit';

interface StateBagType {
  bagItems: Array<Object>;
  valueBag: Number;
}

// Define the initial state using that type
const stateBag: StateBagType = {
  bagItems: [],
  valueBag: 0,
};

const ACTION_ADD_BAG_ITEMS = (state: StateBagType, { payload }: PayloadAction<Object>) => {
  state.bagItems.unshift(payload);
};

export { stateBag, ACTION_ADD_BAG_ITEMS };
