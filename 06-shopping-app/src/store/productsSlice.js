import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', 
  async(selectedCategory, thunkAPI) => {
    try{
      let response;
      if(selectedCategory === "All"){
        response = await axios.get(
          'https://fakestoreapi.com/products'
        )
      } else{
        response = await axios.get(
          `https://fakestoreapi.com/products/category/${selectedCategory}`
        )
      }
      // console.log('products response', response.data);
      return response.data;

    } catch (error) {
      return thunkAPI.rejectedValue("에러");
    }
})

const initialState = {
  status: "",
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'success';
      state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    })
  }
})
export default productsSlice.reducer;
