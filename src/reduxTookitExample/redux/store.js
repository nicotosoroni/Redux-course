import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';

const store = configureStore({
  reducer: {
    // @ts-ignore
    data: { users: usersReducer },
  },
});

export default store;
