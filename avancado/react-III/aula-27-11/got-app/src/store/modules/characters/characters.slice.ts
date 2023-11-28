import { createSlice } from "@reduxjs/toolkit";
import { listCharacters } from "./actions";

interface Character {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  family: string;
  image: string;
  imageUrl: string;
}

const initialState: Character[] = [];

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listCharacters.pending, () => {
        console.log("BUSCANDO OS PERSONAGENS...");
      })
      .addCase(listCharacters.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }

        state = action.payload;
        return state;
      });
  },
});

export default charactersSlice.reducer;
