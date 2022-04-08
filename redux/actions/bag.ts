import { PayloadAction } from '@reduxjs/toolkit';
import type { ImageProps } from 'next/image';

interface TypeAddBagInfos {
  id: Number;
  type: string;
  title: string;
  quantity: number;
  identifyBag: string;
  mainImg: ImageProps;
  colorName: string;
  color: string;
  size: string;
}

interface StateBagType {
  bagItems: Array<TypeAddBagInfos>;
  valueBag: Number;
  itemEditBag: {
    id: number;
    type: string;
    title: string;
    quantity: number;
    identifyBag: string;
    mainImg: ImageProps;
    colorName: string;
    color: string;
    size: string;
    code: string;
  };
  checkout: {
    adderessSelected: {
      name: string;
      road: string;
      district: string;
      number: string;
      uf: string;
      city: string;
      zipcode: string;
    };
    shipping: {
      shippingCompany: string;
      valueShipping: number;
    };
    formatPay: {
      formatPayment: string;
      division: number;
    };
    cupomAplicate: {
      code: string;
      descountCupom: number;
    };
  }
}

// Define the initial state using that type
const stateBag: StateBagType = {
  bagItems: [],
  valueBag: 0,
  itemEditBag: {
    id: 0,
    title: '',
    type: '',
    color: '',
    mainImg: {
      src: '',
    },
    colorName: '',
    size: '',
    quantity: 0,
    identifyBag: '',
    code: '',
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

const ACTION_EDIT_BAG_ITEM = (state: StateBagType, { payload }: PayloadAction<TypeAddBagInfos>) => {
  state.itemEditBag = payload;
};

const ACTION_FINISH_EDIT_BAG_ITEM = (
  state: StateBagType,
  { payload }: PayloadAction<TypeAddBagInfos>,
) => {
  state.itemEditBag = payload;
};

export {
  stateBag,
  ACTION_ADD_BAG_ITEMS,
  ACTION_RM_BAG_ITEM,
  ACTION_EDIT_BAG_ITEM,
  ACTION_FINISH_EDIT_BAG_ITEM,
};
