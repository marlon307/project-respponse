import { PayloadAction } from '@reduxjs/toolkit';
import type {
  StateBagType, TypeAddBagInfos, TypeEditBagInfos, TShipping, TFormatPay,
} from './types/bag';
// Define the initial state using that type
const stateBag: StateBagType = {
  bagItems: [],
  valueBag: 0,
  itemEditBag: {
    id: 0,
    title: '',
    type: '',
    color: '',
    colorName: '',
    mainImg: {
      src: '',
    },
    size: '',
    quantity: 0,
    identifyBag: '',
  },
  checkout: {
    adderessSelected: {
      name: 'Entregar para',
      road: '---',
      district: '---',
      number: '---',
      uf: '---',
      city: '---',
      zipcode: '---',
    },
    shipping: {
      shippingCompany: '',
      valueShipping: 0,
    },
    formatPay: {
      formatPayment: 'Forma de pagamento',
      division: 0,
    },
    cupomAplicate: {
      code: '',
      descountCupom: 0,
    },
  },
};

const ACTION_ADD_BAG_ITEMS = (state: StateBagType, { payload }: PayloadAction<TypeAddBagInfos>) => {
  const index = state.bagItems.findIndex(({ identifyBag }) => identifyBag === payload.identifyBag);
  if (index) {
    state.bagItems.unshift(payload);
  } else {
    state.bagItems[index].quantity += 1;
  }
};

const ACTION_RM_BAG_ITEM = (state: StateBagType, { payload }: PayloadAction<string>) => {
  state.bagItems = state.bagItems.filter(({ identifyBag }) => identifyBag !== payload);
};

const ACTION_EDIT_BAG_ITEM = (
  state: StateBagType,
  { payload }: PayloadAction<TypeEditBagInfos>,
) => {
  state.itemEditBag = payload;
};

const ACTION_FINISH_EDIT_BAG_ITEM = (state: StateBagType) => {
  const newId = state.itemEditBag.id + state.itemEditBag.color + state.itemEditBag.size;
  const index = state.bagItems.findIndex(({ identifyBag }) => identifyBag === newId);

  state.bagItems[index] = {
    ...state.bagItems[index],
    ...state.itemEditBag,
  };
};

const ACTION_SELECT_SHIPPING = (state: StateBagType, { payload }: PayloadAction<TShipping>) => {
  state.checkout.shipping = payload;
};

const ACTION_SELECT_PAYMENT = (state: StateBagType, { payload }: PayloadAction<TFormatPay>) => {
  state.checkout.formatPay = payload;
};

export {
  stateBag,
  ACTION_ADD_BAG_ITEMS,
  ACTION_RM_BAG_ITEM,
  ACTION_EDIT_BAG_ITEM,
  ACTION_FINISH_EDIT_BAG_ITEM,
  ACTION_SELECT_SHIPPING,
  ACTION_SELECT_PAYMENT,
};
