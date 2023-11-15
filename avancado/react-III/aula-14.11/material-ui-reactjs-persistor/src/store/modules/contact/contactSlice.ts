import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ContactType {
  companyName: string;
  email: string;
  phone: string;
}

const initialState: ContactType = {
  companyName: 'Growdev',
  email: 'oi@growdev.com.br',
  phone: '(51) 98788-9888'
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<ContactType>) => {
      return action.payload;
    },
    clearState: () => {
      return initialState;
    }
  }
});

export const { clearState, edit } = contactSlice.actions;
export default contactSlice.reducer;
