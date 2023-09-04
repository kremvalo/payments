import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/product_slice';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
