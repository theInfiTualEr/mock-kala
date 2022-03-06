import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { generateProducts } from "./parseResponse";
import { fetchProducts } from "./thunks";
import FavoriteToggledActionPayload from "./types/FavoriteToggledActionPayload";
import Product from "./types/Product";
import ProductsAdapterExtra from "./types/ProductsAdapterExtra";

const productsAdapter = createEntityAdapter<Product>();

const initialState = productsAdapter.getInitialState<ProductsAdapterExtra>({
  status: "idle",
  error: undefined,
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    favoriteToggled: {
      reducer: (state, action: PayloadAction<FavoriteToggledActionPayload>) => {
        const product = state.entities[action.payload.productId];
        if (product !== undefined) {
          product.isFav = !product.isFav;
        }
      },
      prepare: (productId: number) => {
        return { payload: { productId } };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        // change status
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // change status
        state.status = "succeeded";
        // convert object
        const products = generateProducts(action.payload);
        // update
        productsAdapter.addMany(state, products);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // change status
        state.status = "failed";
        // set the message
        state.error = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectEntities: selectAllProductEntities,
} = productsAdapter.getSelectors((state: RootState) => state.products);

export const selectProductsByName = (state: RootState, query: string) =>
  selectAllProducts(state).filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

export const selectFavoriteProducts = (state: RootState) =>
  selectAllProducts(state).filter((product) => product.isFav);

export const { favoriteToggled } = productsSlice.actions;

export const selectProductsStatus = (state: RootState) => state.products.status;

export const productsReducer = productsSlice.reducer;
