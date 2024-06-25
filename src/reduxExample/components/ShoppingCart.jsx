import React from 'react';
import ProductItem from './ProductItem';
import { CartItem } from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  clearCart,
} from 'reduxExample/actions/shoppingActions';

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // @ts-ignore
  const { products, cart } = state.shopping;

  return (
    <>
      <div>Shopping Cart</div>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          ></ProductItem>
        ))}
      </article>
      <article className="box">
        <h3>Cart</h3>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            removeOneFromCart={() => dispatch(removeFromCart(item.id))}
            removeAllFromCart={() => dispatch(removeFromCart(item.id, true))}
          ></CartItem>
        ))}
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </article>
    </>
  );
};

export default ShoppingCart;
