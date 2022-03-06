import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SideStatusChangedActionPayload from "./types/SideStatusChangedActionPayload";
import SideState from "./types/SideState";
import { RootState } from "../../store";

const initialState: SideState = { status: null };

const sideSlice = createSlice({
  name: "side",
  initialState,
  reducers: {
    sideChanged: {
      reducer: (
        state,
        action: PayloadAction<SideStatusChangedActionPayload>
      ) => {
        state.status = action.payload;
      },
      prepare: (newStatus: SideStatusChangedActionPayload) => {
        return { payload: newStatus };
      },
    },
  },
});

export const selectSideStatus = (root: RootState) => root.side.status;

export const { sideChanged } = sideSlice.actions;

export const sideReducer = sideSlice.reducer;
