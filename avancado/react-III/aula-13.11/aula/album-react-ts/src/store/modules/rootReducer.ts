import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter/counter.slice";
import albumSlice from "./album/album.slice";

const rootReducer = combineReducers({
  counter: counterSlice,
  album: albumSlice,
  // produtos: produtosSlice
  // vendas: vendasSlice
  // fornecedores: fornecedoresSlice
  // clientes: clientesSlice
  // usuarioLogado: usuarioLogadoSlice
});

export default rootReducer;
