import { PayloadAction } from '@reduxjs/toolkit';

interface TypeAddBagInfos {
  id: number;
  size: string;
  color: string;
}

interface StateBagType {
  bagItems: Array<TypeAddBagInfos>;
  valueBag: Number;
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
  state.bagItems.unshift(payload);
};

export { stateBag, ACTION_ADD_BAG_ITEMS };
