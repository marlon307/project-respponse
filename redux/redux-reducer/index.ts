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
  itemEditBag: {},
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
      const index = state.bagItems
        .findIndex(({ identifyBag }) => identifyBag === payload.identifyBag);

      (newObj.bagItems[index] as Object) = {
        ...payload,
      };
      return state;
    }
    default:
      return state;
  }
};

// return {
//   ...state,
//   // bagItems: payload,
// };
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
