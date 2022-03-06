import { AppDispatch, RootState } from "../../store";
import {
  cartItemAdded,
  cartItemCountIncreased,
  selectAllCartItems,
} from "./cartSlice";

export const addOrUpdateCartItem = (itemId: number, count: number) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const cartItems = selectAllCartItems(state);
    const theCartItem = cartItems.find(
      (cartItem) => cartItem.itemId === itemId
    );

    if (theCartItem === undefined) {
      dispatch(cartItemAdded(itemId, count));
    } else {
      dispatch(cartItemCountIncreased(theCartItem.id, count));
    }
  };
};
