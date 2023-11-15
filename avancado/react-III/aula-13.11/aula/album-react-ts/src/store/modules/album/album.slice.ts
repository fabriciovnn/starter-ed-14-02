// id, title, conteudo, favorito, urlImg

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Foto {
  id: number;
  title: string;
  conteudo: string;
  favorito: boolean;
  urlImg: string;
}

const initialState: Foto[] = [];

const albumSlice = createSlice({
  name: "album",
  initialState: initialState,
  reducers: {
    // objeto contendo nossas ações para manipular o estado
    add: (state, action: PayloadAction<Foto>) => {
      state = [...state, action.payload];

      return state;
    },

    remove: (state, action: PayloadAction<{ id: number }>) => {
      const temp = [...state];

      const index = temp.findIndex((foto) => foto.id === action.payload.id);

      if (index !== -1) {
        temp.splice(index, 1);
      }

      state = [...temp];
      return state;
    },

    toggleFavorito: (state, action: PayloadAction<{ id: number }>) => {
      const temp = [...state];

      const index = temp.findIndex((foto) => foto.id === action.payload.id);

      if (index !== -1) {
        temp.splice(index, 1);
      }

      temp[index].favorito = !temp[index].favorito;
      state = [...temp];

      return state;
    },
  },
});

export const { add, remove, toggleFavorito } = albumSlice.actions;
export default albumSlice.reducer;
