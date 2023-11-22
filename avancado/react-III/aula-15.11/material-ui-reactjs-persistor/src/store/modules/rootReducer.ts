import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './products/productsSlice';
import contactSlice from './contact/contactSlice';
import usersSlice from './users/usersSlice';
import userSlice from './users/userSlice';

export default combineReducers({
  products: productsSlice,
  contact: contactSlice,
  users: usersSlice,
  user: userSlice
});
