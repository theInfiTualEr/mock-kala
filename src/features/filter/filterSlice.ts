import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { selectAllProducts } from "../products/productsSlice";
import Product from "../products/types/Product";

type FilterState = {
  order: "asc" | "dec" | null;
  sortBy: "price" | "rating" | "popularity" | null;
  price: [number, number] | null;
};

const initialState: FilterState = {
  order: null,
  sortBy: null,
  price: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterOrderChanged(state, action) {
      state.order = action.payload;
    },
    filterSortByChanged(state, action) {
      state.sortBy = action.payload;
    },
    filterPriceChanged(state, action) {
      state.price = action.payload;
    },
  },
});

function filterProducts(products: Product[], filter: FilterState): Product[] {
  let newProducts = products;

  const filterPrice = filter.price;

  if (filterPrice !== null) {
    newProducts.filter(
      (product) =>
        product.price >= filterPrice[0] && product.price <= filterPrice[1]
    );
  }

  if (filter.sortBy === "price") {
    newProducts.sort((a, b) => a.price - b.price);
  } else if (filter.sortBy === "popularity") {
    newProducts.sort((a, b) => a.rating.count - b.rating.count);
  } else if (filter.sortBy === "rating") {
    newProducts.sort((a, b) => a.rating.rate - b.rating.rate);
  }

  if (filter.order === "dec") {
    return newProducts.reverse();
  }

  return newProducts;
}

export const selectFilter = (state: RootState) => state.filter;

export const selectFilteredProducts = createSelector(
  [(state: RootState, products: Product[]) => products, selectFilter],
  filterProducts
);

export const filterReducer = filterSlice.reducer;

export const { filterOrderChanged, filterPriceChanged, filterSortByChanged } =
  filterSlice.actions;
