import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    role: null,
    name: null,
    storeId: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.role = action.payload.role;
      state.name = action.payload.name;
      state.storeId = action.payload.storeId;
    },
    clearAuth: (state) => {
      state.role = null;
      state.name = null;
      state.storeId = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice;
