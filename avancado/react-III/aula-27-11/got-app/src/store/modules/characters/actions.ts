import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: URL,
});

//listar
export const listCharacters = createAsyncThunk("listar", async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch {
    return null;
  }
});
