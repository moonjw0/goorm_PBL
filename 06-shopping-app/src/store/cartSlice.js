import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addCart: (state, action) => {
      state.push(action.payload); // 직접수정
      // console.log(JSON.parse(JSON.stringify(state)));
    },
    removeCart: (state, action) => {
      return state.filter(product => product.id !== action.payload); // 새로운 state 반환
    },
    clearCart: () => {
      return [];
    },
  }
})

export const { addCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

