import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from './usersSlice';

const initialState: UserType = {
  id: '',
  email: '',
  nickname: '',
  password: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      return action.payload;
    },
    logout: () => {
      return initialState;
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
