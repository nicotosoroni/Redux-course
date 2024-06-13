import React, { useReducer } from 'react';
import {
  shoppingReducer,
  shoppingInitialState,
} from 'reducers/shoppingReducer';
import ProductItem from './ProductItem';
import { CartItem } from './CartItem';
import { TYPES } from 'actions/shoppingActions';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const removeFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };
  const removeAllFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };
  return (
    <>
      <div>Shopping Cart</div>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={addToCart}
          ></ProductItem>
        ))}
      </article>
      <article className="box">
        <h3>Cart</h3>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            removeOneFromCart={removeFromCart}
            removeAllFromCart={removeAllFromCart}
          ></CartItem>
        ))}
        <button onClick={clearCart}>Clear Cart</button>
      </article>
    </>
  );
};

export default ShoppingCart;
