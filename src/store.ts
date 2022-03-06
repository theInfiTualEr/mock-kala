import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart/cartSlice";
import { catalogReducer } from "./features/catalog/catalogSlice";
import { filterReducer } from "./features/filter/filterSlice";
import { productsReducer } from "./features/products/productsSlice";
import { routeHistoryReducer } from "./features/routeHistory/routeHistorySlice";
import { sideReducer } from "./features/side/sideSlice";
import { userReducer } from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    catalog: catalogReducer,
    user: userReducer,
    side: sideReducer,
    cart: cartReducer,
    routeHistory: routeHistoryReducer,
    filter: filterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
