import {
  createEntityAdapter,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";
import CartItem from "./types/CartItem";
import CartItemCountIncreasedActionPayload from "./types/CartItemCountIncreasedActionPayload";
import CartItemCountUpdatedActionPayload from "./types/CartItemCountUpdatedActionPayload";

const cartAdapter = createEntityAdapter<CartItem>();

const initialState = cartAdapter.getInitialState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartItemAdded: {
      reducer: (state, action: PayloadAction<CartItem>) => {
        cartAdapter.addOne(state, action.payload);
      },
      prepare: (itemId: number, count: number) => {
        return {
          payload: {
            id: nanoid(),
            itemId,
            count,
          },
        };
      },
    },
    cartItemRemoved: {
      reducer: (state, action: PayloadAction<string>) => {
        cartAdapter.removeOne(state, action.payload);
      },
      prepare: (id: string) => {
        return {
          payload: id,
        };
      },
    },
    cartItemCountUpdated: {
      reducer: (
        state,
        action: PayloadAction<CartItemCountUpdatedActionPayload>
      ) => {
        const cartItem = state.entities[action.payload.id];

        if (cartItem !== undefined) {
          cartItem.count = action.payload.newCount;
        }
      },
      prepare: (id: string, newCount: number) => {
        return {
          payload: {
            id,
            newCount,
          },
        };
      },
    },
    cartItemCountIncreased: {
      reducer: (
        state,
        action: PayloadAction<CartItemCountIncreasedActionPayload>
      ) => {
        const cartItem = state.entities[action.payload.id];

        if (cartItem !== undefined) {
          cartItem.count += action.payload.additionalCount;
        }
      },
      prepare: (id: string, additionalCount: number) => {
        return {
          payload: {
            id,
            additionalCount,
          },
        };
      },
    },
  },
});

export const { selectAll: selectAllCartItems } = cartAdapter.getSelectors(
  (root: RootState) => root.cart
);

export const {
  cartItemAdded,
  cartItemCountUpdated,
  cartItemRemoved,
  cartItemCountIncreased,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
