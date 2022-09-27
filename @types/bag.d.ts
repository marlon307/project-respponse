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
  product_option: number;
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
  add_id?: number;
  name_delivery: string;
  road: string;
  district: string;
  number_home: string;
  uf: string;
  city: string;
  cep: string;
}

interface StateBagType {
  valueBag: number;
  itemEditBag: TypeEditBagInfos;
  checkout: {
    shipping: Shipping;
    formatPay: TFormatPay;
    cupomAplicate: {
      code: string;
      descountCupom: number;
    };
  }
}
