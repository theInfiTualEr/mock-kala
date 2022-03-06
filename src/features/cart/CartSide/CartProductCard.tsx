import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CountInput from "../../../components/CountInput";
import CustomButton from "../../../components/CustomButton";
import { RootState } from "../../../store";
import colors from "../../../values/colors";
import strings from "../../../values/strings";
import { selectProductById } from "../../products/productsSlice";
import { cartItemCountUpdated, cartItemRemoved } from "../cartSlice";

const Container = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.primaryText};
  border-radius: 8px;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const PictureContainer = styled.div`
  flex-basis: content;
  flex-shrink: 1;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50%;
`;

const StyledImg = styled.img`
  width: 100%;
`;

interface Props {
  className?: string;
  id: string;
  count: number;
  itemId: number;
}

const CartProductCard: React.FC<Props> = ({
  className,
  id,
  count: countProp,
  itemId,
}) => {
  const product = useSelector((state: RootState) =>
    selectProductById(state, itemId)
  );

  const [count, setCount] = useState(`${countProp}`);

  const dispatch = useDispatch();

  return (
    <Container className={className}>
      <PictureContainer>
        <StyledImg src={product?.image} alt={product?.title} />
      </PictureContainer>
      <InfoContainer>
        <p>{product?.title}</p>
        <p>{product?.price}$</p>
        <CountInput
          count={count}
          setCount={setCount}
          onValidChange={(value) => {
            dispatch(cartItemCountUpdated(id, value));
          }}
        />
        <CustomButton
          isOutline={false}
          title={strings.cart.productRemoveButton}
          onClick={() => {
            dispatch(cartItemRemoved(id));
          }}
        />
      </InfoContainer>
    </Container>
  );
};

export default CartProductCard;
