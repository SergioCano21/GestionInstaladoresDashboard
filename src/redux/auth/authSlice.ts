import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    role: null,
    name: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.role = action.payload.role;
      state.name = action.payload.name;
    },
    clearAuth: (state) => {
      state.role = null;
      state.name = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice;
