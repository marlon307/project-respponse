export interface PSmallCard {
  objectID: ObjectId;
  removable?: boolean;
  editable?: boolean;
  eventModal?: Function;
  execFunction?: () => void;
}
