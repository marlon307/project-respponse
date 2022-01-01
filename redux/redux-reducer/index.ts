import { combineReducers } from 'redux';
import * as types from '../types';

// INITIAL TIMER STATE
interface IUserAction {
  type: string,
  payload: any,
}

const initialUserState = {
  authenticated: '',
  logged: false,
  bagItems: [],
  itemEditBag: {
    id: 0,
    title: '',
    type: '',
    color: '',
    colorName: '',
    size: '',
    price: '',
    discount: '',
    oldPrice: '',
    quantity: 0,
    identifyBag: '',
  },
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
      value: '',
      division: '--',
    },
    cupomAplicate: {
      code: '',
      descountCupom: 0,
    },
  },
};

// USER REDUCER
const userReducer = (state = initialUserState, { type, payload }: IUserAction) => {
  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        authenticated: payload.auth,
        logged: payload.log,
      };
    case types.LOGOUT:
      return {
        ...state,
        authenticated: payload.auth,
        logged: payload.log,
      };
    case types.SELECT_ADDERESS:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          adderessSelected: payload,
        },
      };
    case types.SELECT_SHIPPING:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          shipping: payload,
        },
      };
    case types.SELECT_PAYMENT:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          formatPay: payload,
        },
      };
    case types.ADD_BAG:
      return {
        ...state,
        bagItems: payload,
      };
    case types.REMOVE_BAG: {
      const newArray = state.bagItems.filter(({ identifyBag }) => identifyBag !== payload);

      return {
        ...state,
        bagItems: newArray,
      };
    }
    case types.GET_EDITITEMBAG:
      return {
        ...state,
        itemEditBag: payload,
      };
    case types.EDIT_ITEMBAG: {
      const newObj = state;
      newObj.itemEditBag = payload;
      return state;
    }
    case types.FINISHEDIT_ITEMBAG: {
      type T = {
        bagItems: Array<Object>;
        itemEditBag: {
          id: number,
          color: string;
          size: string;
          identifyBag: string;
        };
      };
      type TO = {
        identifyBag: string;
      }

      const newState: T = state;
      const {
        id, color, size, identifyBag,
      } = newState.itemEditBag;
      const newIdItemBag = id + color + size;

      const index = state.bagItems
        .findIndex((object: TO) => object.identifyBag === newIdItemBag);

      if (index >= 0) {
        newState.bagItems[index] = {
          ...state.itemEditBag,
          identifyBag: newIdItemBag,
        };
      } else {
        const newIndex = state.bagItems
          .findIndex((object: TO) => object.identifyBag === identifyBag);

        newState.bagItems[newIndex] = {
          ...state.itemEditBag,
          identifyBag: newIdItemBag,
        };
      }

      return { ...newState };
    }
    default:
      return state;
  }
};

interface IAppAction {
  type: string,
  payload: {
    filter: Array<Object>;
  },
}

const intialStateApp = {
  filter: [],
};

const application = (state = intialStateApp, { type, payload }: IAppAction) => {
  switch (type) {
    case types.ADDFILTER:
      return {
        filter: [...state.filter, payload],
      };
    default:
      return state;
  }
};
// COMBINED REDUCERS
const reducers = {
  user: userReducer,
  application,
};

export default combineReducers(reducers);
