import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: { data: [] },
  reducers: {
    createProduct: (state, action) => {
      state.data.push(action.payload);
    },
    readProduct: (state, action) => {
      state.data = action.payload;
    },
    updateProduct: (state, action) => {
      const { id, name } = action.payload;
      const product = state.data.find((prod) => prod.id === id);
      if (product) {
        product.name = name;
      }
    },
    deleteProduct: (state, action) => {},
  },
});

export const { createProduct, readProduct, updateProduct, deleteProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
