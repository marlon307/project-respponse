type ObjectId = {
  id: number;
  title: string;
  type: string;
  mainImg: string | any;
  price: number;
  oldPrice: number;
  colorName: string;
  color: string;
  size: string;
  quantity: number;
  discount: number;
}

export interface PSmallCard {
  objectID: ObjectId;
  removable?: boolean;
  editable?: boolean;
  eventModal?: Function;
  identifyBag?: string;
}
