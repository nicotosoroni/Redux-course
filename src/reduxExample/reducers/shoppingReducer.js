import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from 'reduxExample/types';

export const initialState = {
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

export const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = state.products.find(
        (product) => product.id === action.payload
      );
      const itemInCart = state.cart.find((i) => i.id === item.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...item, quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      const itemInCart = state.cart.find((i) => i.id === action.payload);
      return itemInCart.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((i) =>
              i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
            ),
          }
        : { ...state, cart: state.cart.filter((i) => i.id !== action.payload) };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART: {
      return initialState;
    }
    default:
      return state;
  }
};
