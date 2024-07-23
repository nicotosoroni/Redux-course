import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProduct,
  readProduct,
  updateProduct,
} from 'reduxToolkitExample/redux/productsSlice';

const ProductsList = () => {
  // @ts-ignore
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [newProductName, setNewProductName] = useState('');
  const [editedProduct, setEditedProduct] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((res) => {
        console.log(res);
        dispatch(readProduct(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  const handleCreateProduct = () => {
    if (newProductName) {
      const newProduct = { id: Date.now(), name: newProductName };
      dispatch(createProduct(newProduct));
      axios
        .post('http://localhost:3001/products', newProduct)
        .then(() => setNewProductName(''))
        .catch((error) => console.log(error));
    }
  };
  const handleUpdateProduct = () => {
    if (editedProduct) {
      dispatch(
        // @ts-ignore
        updateProduct({ id: editedProduct.id, name: editedProduct.name })
      );
      axios
        // @ts-ignore
        .put(`http://localhost:3001/products/${editedProduct.id}`, {
          // @ts-ignore
          name: editedProduct.name,
        })
        .then(() => setEditedProduct(null))
        .catch((error) => console.log('put', error));
    }
  };
  const handleDeleteProduct = () => {};

  return (
    <>
      <h3>Products CRUD</h3>
      <ul>
        {products.data.map((product) => (
          <li key={product.id}>
            {
              // @ts-ignore
              editedProduct?.id === product.id ? (
                <div>
                  <input
                    type="text"
                    value={
                      // @ts-ignore
                      editedProduct.name
                    }
                    onChange={(e) =>
                      setEditedProduct({
                        // @ts-ignore
                        ...editedProduct,
                        name: e.target.value,
                      })
                    }
                  />
                  <button onClick={handleUpdateProduct}>Actualizar</button>
                </div>
              ) : (
                <div>
                  <span>{product.name}</span>
                  <button onClick={() => setEditedProduct(product)}>
                    Editar
                  </button>
                  <button onClick={handleDeleteProduct}>Eliminar</button>
                </div>
              )
            }
          </li>
        ))}
      </ul>
      <aside>
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <button onClick={handleCreateProduct}>Agregar Producto</button>
      </aside>
    </>
  );
};

export default ProductsList;
