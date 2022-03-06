import { createAsyncThunk } from "@reduxjs/toolkit";
import ResponseProduct from "./types/ResponseProduct";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (): Promise<ResponseProduct[]> => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();

    return json;
  }
);
