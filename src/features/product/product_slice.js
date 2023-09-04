/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchProduct from './productApi';

const initialState = {
  loading: false,
  error: null,
  productData: {
    id: '1',
    name: '',
    category: '',
    description: '',
    price: '',
    colors: [
      { id: 0, color: '', name: '' },
    ],
    images: [],
    specifications: '',
    inTheBox: '',
  },
};

export const getProductAsync = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const response = await fetchProduct();
    return response.data;
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.productData = action.payload;
      });
  },
});

export default productSlice.reducer;
