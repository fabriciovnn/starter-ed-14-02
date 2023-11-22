import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ProductType {
  id: string;
  name: string;
  price: number;
}

const initialState: ProductType[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.push(action.payload);

      return state;
    },
    clearState: () => {
      return initialState;
    }
  }
});

export const { addProduct, clearState } = productsSlice.actions;
export default productsSlice.reducer;
