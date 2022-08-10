import type { ImageProps } from 'next/image';

export interface TypeEditBagInfos {
  id: number;
  type: string;
  title: string;
  quantity: number;
  identifyBag: string;
  mainImg: Object<ImageProps['src']>;
  colorName: string;
  color: string;
  size: string;
}

export interface TypeAddBagInfos extends TypeEditBagInfos {
  discount: number;
  oldPrice: number;
  price: number;
}

interface TShipping {
  shippingCompany: string;
  valueShipping: number;
}

interface TFormatPay {
  formatPayment: string;
  division: number;
}

interface TAddress {
  name: string;
  road: string;
  district: string;
  number: string;
  uf: string;
  city: string;
  zipcode: string;
}

interface StateBagType {
  bagItems: Array<TypeAddBagInfos>;
  valueBag: number;
  itemEditBag: TypeEditBagInfos;
  checkout: {
    adderessSelected: TAddress;
    shipping: Shipping;
    formatPay: TFormatPay;
    cupomAplicate: {
      code: string;
      descountCupom: number;
    };
  }
}
