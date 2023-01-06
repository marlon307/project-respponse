interface POrder {
  id: number;
  date_order: Date
  status: string;
}

interface PropsOrder {
  orders: POrder[];
  ConponeteRender: any
}

interface StateOrder {
  id?: number;
  status_id?: number,
  payment: string;
  address?: {
    road: string;
    number_home: string;
    district: string;
    city: string;
    uf: string;
    zipcode: string;
    name_delivery: string;
  };
  list_products?: TypeAddBagInfos[];
  value_order?: number;
  date_order?: string;
  carrier: {
    name_carrier: string;
    code: string;
    delivery_value: float;
  },
}
