import React from 'react';

export const CartItem = ({ data, removeOneFromCart, removeAllFromCart }) => {
  return (
    <div>
      <div>{data.name}</div>
      <div>price: ${data.price}</div>
      <div>quantity: {data.quantity}</div>
      <button onClick={() => removeOneFromCart(data.id)}>Remove</button>
      <button onClick={() => removeAllFromCart(data.id)}>Remove All</button>
    </div>
  );
};
