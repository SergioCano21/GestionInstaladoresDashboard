import { configureStore } from '@reduxjs/toolkit/react';
import authSlice from '@/redux/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
