import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchUser } from "./thunks";
import AddressAddedActionPayload from "./types/AddressAddedActionPayload";
import AddressRemovedActionPayload from "./types/AddressRemovedActionPayload";
import UserAddress from "./types/UserAddress";
import UserState from "./types/UserState";

const initialState: UserState = {
  user: undefined,
  status: "idle",
  error: undefined,
};

// TODO default address property
// TODO change default address reducer

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addressAdded: {
      reducer: (state, action: PayloadAction<AddressAddedActionPayload>) => {
        // TODO make sure it's not duplicate, meh
        const user = state.user;
        if (user !== undefined) {
          user.addresses = [...user.addresses, action.payload.newAddress];
        }
      },
      prepare: (city: string, street: string) => {
        const newAddress: UserAddress = {
          id: nanoid(),
          city,
          street,
        };
        return { payload: { newAddress } };
      },
    },
    addressRemoved: {
      reducer: (state, action: PayloadAction<AddressRemovedActionPayload>) => {
        const user = state.user;

        if (user !== undefined) {
          user.addresses = user.addresses.filter(
            (address) => address.id !== action.payload.addressId
          );
        }
      },
      prepare: (addressId: string) => {
        return { payload: { addressId } };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        // set status
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        // set status
        state.status = "succeeded";
        // set the object
        if (state.user === undefined) {
          state.user = action.payload;
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        // set status
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addressAdded, addressRemoved } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export const userReducer = userSlice.reducer;
