import type { ImageProps } from 'next/image';

export interface TypeEditBagInfos {
  id: number;
  category_name: string;
  title: string;
  quantity: number;
  url_image: Object<ImageProps['src']>;
  color_name: string;
  color: string;
  size: string;
  opt_id: number;
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

interface StateBagType {
  valueBag: number;
  itemEditBag: TypeEditBagInfos;
  checkout: {
    formatPay: TFormatPay;
    cupomAplicate: {
      code: string;
      descountCupom: number;
    };
  }
}

export interface Shipping {
  id: number;
  name_carrie: string;
  price: float;
  toDate: number;
}
