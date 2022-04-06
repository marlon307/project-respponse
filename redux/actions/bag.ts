import { PayloadAction } from '@reduxjs/toolkit';

interface TypeAddBagInfos {
  id: number;
  size: string;
  color: string;
}

interface StateBagType {
  bagItems: Array<TypeAddBagInfos>;
  valueBag: Number;
}

// Define the initial state using that type
const stateBag: StateBagType = {
  bagItems: [],
  valueBag: 0,
};

const ACTION_ADD_BAG_ITEMS = (state: StateBagType, { payload }: PayloadAction<TypeAddBagInfos>) => {
  state.bagItems.unshift(payload);
};

export { stateBag, ACTION_ADD_BAG_ITEMS };
