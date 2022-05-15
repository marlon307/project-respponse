import { PayloadAction } from '@reduxjs/toolkit';
import calcAllValuesArray from '../../hooks/useCalcs';
import type {
  StateBagType, TypeAddBagInfos, TypeEditBagInfos, TShipping, TFormatPay, TAddress,
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
      name: 'Clique aqui ( 👇 ) para selecionar o endereço.',
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
  state.valueBag = calcAllValuesArray(state.bagItems);
};

const ACTION_RM_BAG_ITEM = (state: StateBagType, { payload }: PayloadAction<string>) => {
  state.bagItems = state.bagItems.filter(({ identifyBag }) => identifyBag !== payload);
  state.valueBag = calcAllValuesArray(state.bagItems);
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

  const validIndex = index >= 0 ? index
    : state.bagItems.findIndex(({ identifyBag }) => identifyBag === state.itemEditBag.identifyBag);

  state.bagItems[validIndex] = {
    ...state.bagItems[validIndex],
    ...state.itemEditBag,
    identifyBag: newId,
  };
};

const ACTION_SELECT_SHIPPING = (state: StateBagType, { payload }: PayloadAction<TShipping>) => {
  state.checkout.shipping = payload;
};

const ACTION_SELECT_PAYMENT = (state: StateBagType, { payload }: PayloadAction<TFormatPay>) => {
  state.checkout.formatPay = payload;
};

const ACTION_SELECT_ADDRESS = (state: StateBagType, { payload }: PayloadAction<TAddress>) => {
  state.checkout.adderessSelected = payload;
};

export {
  stateBag,
  ACTION_ADD_BAG_ITEMS,
  ACTION_RM_BAG_ITEM,
  ACTION_EDIT_BAG_ITEM,
  ACTION_FINISH_EDIT_BAG_ITEM,
  ACTION_SELECT_SHIPPING,
  ACTION_SELECT_PAYMENT,
  ACTION_SELECT_ADDRESS,
};
