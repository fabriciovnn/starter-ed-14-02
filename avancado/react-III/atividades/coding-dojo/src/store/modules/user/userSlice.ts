import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserType {
  email: string;
  password: string;
}

const initialState: UserType[] = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<UserType>) => {
      const userExist = state.find(
        (user) => user.email === action.payload.email
      );
      if (userExist) {
        return state;
      }

      state.push(action.payload);
    },
  },
});

export const { cadastrar } = userSlice.actions;
export default userSlice.reducer;
