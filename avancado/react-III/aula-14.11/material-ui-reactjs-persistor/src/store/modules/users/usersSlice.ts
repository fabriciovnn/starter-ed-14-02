import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserType {
  id: string;
  email: string;
  password: string;
  nickname: string;
}

const initialState: UserType[] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<UserType>) => {
      state.push(action.payload);
      return state;
    },
    clear: () => {
      return initialState;
    }
  }
});

export const { createUser, clear } = usersSlice.actions;
export default usersSlice.reducer;
