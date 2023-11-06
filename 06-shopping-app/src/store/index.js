import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import categoriesSlice from './categoriesSlice';
import productsSlice from './productsSlice';
import cartSlice from './cartSlice'; 

const store = configureStore({
  reducer: {
    user: userSlice,
    categories: categoriesSlice,
    products: productsSlice,
    cart: cartSlice,
  },
});

export default store;
