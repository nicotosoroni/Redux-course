import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readProducts } from 'reduxToolkitExample/redux/productsSlice';

const ProductsList = () => {
  // @ts-ignore
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((res) => {
        console.log(res);
        dispatch(readProducts(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <>
      <h3>Products CRUD</h3>
      <ul>
        {products.data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <aside>
        <input type="text" />
        <button>Agregar Producto</button>
      </aside>
    </>
  );
};

export default ProductsList;
