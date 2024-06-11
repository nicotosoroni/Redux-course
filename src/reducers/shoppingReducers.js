import { TYPES } from '../actions/counterActions';

export const shoppingInitialState = {
  products: [
    { id: 1, title: 'T-shirt', price: 25 },
    { id: 2, title: 'Jeans', price: 40 },
    { id: 3, title: 'Jacket', price: 100 },
    { id: 4, title: 'Shoes', price: 50 },
    { id: 5, title: 'Hat', price: 20 },
    { id: 6, title: 'Socks', price: 5 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action) {
    case TYPES.ADD_TO_CART: {
    }
    case TYPES.REMOVE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
    }

    default:
      return state;
  }
}
