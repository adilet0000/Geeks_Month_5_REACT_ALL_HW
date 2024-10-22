import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './DataSlice'

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;
