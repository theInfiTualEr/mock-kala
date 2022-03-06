import { useDispatch } from "react-redux";
import styled from "styled-components";
import FavFilledIcon from "../../icons/FavFilledIcon";
import FavIcon from "../../icons/FavIcon";
import colors from "../../values/colors";
import { favoriteToggled } from "./productsSlice";

interface Props {
  id: number;
  title: string;
  price: number;
  picture: string;
  isFav: boolean;
  isBigger: boolean;
}

type ContainerProps = {
  isBigger: boolean;
};

const Container = styled.div<ContainerProps>`
  background-color: white;
  width: ${(props) => (props.isBigger ? `unset` : `250px`)};
  height: ${(props) => (props.isBigger ? `unset` : `400px`)};
  max-width: 600px;
  max-height: 800px;
  padding: 35px 25px;
  border-radius: 12px;
  border: 1px;
  border-style: solid;
  border-color: ${colors.accent};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px;
`;

const CardHeader = styled.div`
  flex-basis: 45px;
  width: 100%;
  max-width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
`;

const PriceP = styled.p`
  flex-basis: content;
  flex-shrink: 0;
  flex-grow: 0;
`;

const TitleP = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-grow: 1;
  flex-shrink: 1;
`;

const Img = styled.img`
  flex-grow: 1;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  /* max-width: 200px;
  max-height: 300px; */
`;

const FavContainer = styled.div`
  flex-basis: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: end;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const ProductCard: React.FC<Props> = ({
  id,
  title,
  price,
  picture,
  isFav,
  isBigger,
}) => {
  const dispatch = useDispatch();

  function favOnClick() {
    dispatch(favoriteToggled(id));
  }

  return (
    <Container isBigger={isBigger}>
      <CardHeader>
        <TitleP>{title}</TitleP>
        <PriceP>{price}$</PriceP>
      </CardHeader>
      <Img src={picture} alt={title} />
      <FavContainer>
        <Button onClick={favOnClick}>
          {isFav ? (
            <FavFilledIcon width={20} height={20} fill={colors.primaryText} />
          ) : (
            <FavIcon width={20} height={20} fill={colors.primaryText} />
          )}
        </Button>
      </FavContainer>
    </Container>
  );
};

export default ProductCard;
