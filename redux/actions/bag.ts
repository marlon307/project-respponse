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
    colorName: string;
    color: string;
    size: string;
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
    colorName: '',
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

const ACTION_RM_BAG_ITEMS = (state: StateBagType, { payload }: PayloadAction<String>) => {
  state.bagItems = state.bagItems.filter(({ identifyBag }) => identifyBag !== payload);
};

export { stateBag, ACTION_ADD_BAG_ITEMS, ACTION_RM_BAG_ITEMS };
