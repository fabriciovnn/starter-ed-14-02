import { combineReducers } from "@reduxjs/toolkit";
import charactersSlice from "./characters/characters.slice";

const rootReducer = combineReducers({
  characters: charactersSlice,
});

export default rootReducer;
