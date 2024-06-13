import React from 'react';

const ProductItem = ({ data, addToCart }) => {
  const { id, title, price } = data;
  return (
    <div
      style={{
        border: 'solid 1px black',
        width: '200px',
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h4>{title}</h4>
      <p>{price}</p>
      <button onClick={() => addToCart(id)}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
