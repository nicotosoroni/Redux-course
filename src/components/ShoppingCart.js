import React, { useReducer } from 'react';
import {
  shoppingReducer,
  shoppingInitialState,
} from 'reducers/shoppingReducers';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    console.log(id);
  };
  const removeFromCart = (productId) => {};
  const clearCart = () => {};
  return (
    <>
      <div>Shopping Cart</div>
      <h3>Products</h3>
      <article
        className="box grid-responsive"
        // style={{ display: 'flex', justifyContent: 'center' }}
      >
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={addToCart}
          ></ProductItem>
        ))}
      </article>
      <h3>Cart</h3>
      <article className="box"></article>
    </>
  );
};

export default ShoppingCart;
