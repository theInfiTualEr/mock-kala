import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

function parsePathname(pathname: string): string[] {
  const pathnameSplit = pathname.split("/");

  switch (pathnameSplit[1]) {
    case "catalog":
      return ["Catalog"];
    case "":
      return ["Home"];
    case "product":
      return ["Product", pathnameSplit[2]];
    case "search":
      return ["Search"];
    default:
      return [];
  }
}

const initialState: string[] = [];

const routeHistorySlice = createSlice({
  name: "routeHistory",
  initialState: initialState,
  reducers: {
    routePopped(state) {
      state.pop();

      if (state[state.length - 1] === "Product") state.pop();
    },
    routePushed(state, action) {
      const parsedPathname = parsePathname(action.payload);
      state.push(...parsedPathname);
    },
    routeReplaced(state, action) {
      const parsedPathname = parsePathname(action.payload);
      state = [...parsedPathname];
    },
  },
});

export const selectRouteHistory = (state: RootState) => state.routeHistory;

export const routeHistoryReducer = routeHistorySlice.reducer;

export const { routePopped, routePushed, routeReplaced } =
  routeHistorySlice.actions;
