import { createSlice } from '@reduxjs/toolkit';

const initialState = "All";

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers:{
    currentCategory: (_, action) => action.payload
  }
})

export const { currentCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
