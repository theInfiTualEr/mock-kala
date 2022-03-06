import { MutatingDots } from "react-loader-spinner";
import styled from "styled-components";
import CartProductCard from "./CartProductCard";
import CustomSide from "../../../components/CustomSide";
import { useSelector } from "react-redux";
import { selectAllCartItems } from "../cartSlice";
import CartItem from "../types/CartItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10% 5%;
`;

const CartSide = () => {
  const cartItems = useSelector(selectAllCartItems);

  function renderCartProducts(cartItems: CartItem[]): JSX.Element[] {
    return cartItems.map((cartItem) => (
      <li key={cartItem.id}>
        <CartProductCard
          id={cartItem.id}
          count={cartItem.count}
          itemId={cartItem.itemId}
        />
      </li>
    ));
  }

  return (
    <CustomSide title="Cart">
      {cartItems === undefined ? (
        <MutatingDots
          height="100"
          width="100"
          color="grey"
          ariaLabel="loading"
        />
      ) : (
        <Container>
          <ul>{renderCartProducts(cartItems)}</ul>
        </Container>
      )}
    </CustomSide>
  );
};

export default CartSide;
