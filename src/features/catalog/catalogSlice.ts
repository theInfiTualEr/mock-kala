import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchCategories } from "./thunks";
import CatalogAdapterExtra from "./types/CatalogAdapterExtra";
import Category from "./types/Category";

const catalogAdaptor = createEntityAdapter<Category>();

const initialState = catalogAdaptor.getInitialState<CatalogAdapterExtra>({
  status: "idle",
  error: undefined,
});

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        // change status
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        // change status
        state.status = "succeeded";
        // update
        catalogAdaptor.addMany(state, action.payload);
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        // change status
        state.status = "failed";
        // set the message
        state.error = action.error.message;
      });
  },
});

export const { selectAll: selectAllCatalog } = catalogAdaptor.getSelectors(
  (state: RootState) => state.catalog
);

export const catalogReducer = catalogSlice.reducer;
