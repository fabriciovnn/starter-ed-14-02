import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './products/productsSlice';
import contactSlice from './contact/contactSlice';
import usersSlice from './users/usersSlice';

export default combineReducers({
  products: productsSlice,
  contact: contactSlice,
  users: usersSlice
});
