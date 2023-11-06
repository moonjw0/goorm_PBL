import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice ({
  name: 'user',
  initialState: {
    id:"",
    email: "",
    token: "",
  },
  reducers:{
    login: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      state.id = "";
      state.email = "";
      state.token = "";
    },
  }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

// (u)id, email, token, username, role
// gpt