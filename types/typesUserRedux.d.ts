import type { ImageProps } from 'next/image';

export type ReduxUser = {
  user: {
    logged: boolean;
    bagItems: Array<{
      id: number;
      title: string;
      type: string;
      mainImg: Object<ImageProps['src']>;
      price: number;
      oldPrice: number;
      colorName: string;
      color: string;
      size: string;
      quantity: number;
      discount: number
    }>;
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
};
