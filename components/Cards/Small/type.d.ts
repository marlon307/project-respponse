import { TypeAddBagInfos } from '../../../@types/bag';

export interface PSmallCard {
  objectID: TypeAddBagInfos;
  removable?: boolean;
  editable?: boolean;
  eventModal?: () => void;
  execFunction?: () => void;
}
