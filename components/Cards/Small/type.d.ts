export interface PSmallCard {
  objectID: ObjectId;
  removable?: boolean;
  editable?: boolean;
  eventModal?: () => void;
  execFunction?: () => void;
}
