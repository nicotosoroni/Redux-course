import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    createProducts: (state, actions) => {},
    readProducts: (state, actions) => {},
    updateProducts: (state, actions) => {},
    deleteProducts: (state, actions) => {},
  },
});

export const { createProducts, readProducts, updateProducts, deleteProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
