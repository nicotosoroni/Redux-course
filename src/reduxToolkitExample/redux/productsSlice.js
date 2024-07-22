import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: { data: [] },
  reducers: {
    createProducts: (state, action) => {},
    readProducts: (state, action) => {
      state.data = action.payload;
    },
    updateProducts: (state, action) => {},
    deleteProducts: (state, action) => {},
  },
});

export const { createProducts, readProducts, updateProducts, deleteProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
