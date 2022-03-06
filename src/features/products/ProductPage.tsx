import { useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../../values/colors";
import strings from "../../values/strings";
import { ReactComponent as StarFilledSvg } from "../../icons/star-filled.svg";
import { ReactComponent as StarSvg } from "../../icons/star.svg";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountInput from "../../components/CountInput";
import { selectProductById } from "./productsSlice";
import { RootState } from "../../store";
import ProductCard from "./ProductCard";
import { addOrUpdateCartItem } from "../cart/thunks";
import { fetchProducts } from "./thunks";
import Product from "./types/Product";

const Container = styled.div`
  display: flex;
`;

const ProductContainer = styled.div`
  flex-basis: content;
  flex-shrink: 1;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 50%;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 20px;
`;

const Category = styled.p`
  display: inline-block;
  background-color: ${colors.accent};
  padding: 10px 15px;
  border-radius: 8px;
`;

const Desc = styled.p`
  text-align: justify;
  font-size: 20px;
  line-height: 24px;
`;

const InfoContainerTop = styled.div``;

const InfoContainerTopChild = styled.p`
  margin-bottom: 15px;
`;

const InfoContainerBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function renderRatingStars(product: Product): JSX.Element[] {
  const ratingStars: JSX.Element[] = [];

  for (let i = 1; i <= 5; i++) {
    let ratingStar = <StarSvg key={i} width={35} height={35} />;

    if (i < product.rating.rate) {
      ratingStar = <StarFilledSvg key={i} width={35} height={35} />;
    }

    ratingStars.push(ratingStar);
  }

  return ratingStars;
}

const ProductPage = () => {
  const [count, setCount] = useState("1");

  const { id } = useParams();

  const product = useSelector((state: RootState) =>
    selectProductById(state, parseInt(id ? id : "0"))
  );

  const dispatch = useDispatch();

  if (product === undefined) {
    dispatch(fetchProducts());
    return <></>;
  }

  function addToCartOnClickHandler(productId: number, count: string) {
    const countInt = parseInt(count);

    dispatch(addOrUpdateCartItem(productId, countInt));
  }

  return (
    <Container>
      <ProductContainer>
        <ProductCard
          isBigger={true}
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          picture={product.image}
          isFav={product.isFav}
        />
      </ProductContainer>
      <InfoContainer>
        <InfoContainerTop>
          <InfoContainerTopChild>
            <Category>{product.category}</Category>
          </InfoContainerTopChild>
          <InfoContainerTopChild>
            {renderRatingStars(product)}
            {`(${product.rating.count})`}
          </InfoContainerTopChild>
          <InfoContainerTopChild>
            <Desc>{product.description}</Desc>
          </InfoContainerTopChild>
        </InfoContainerTop>
        <InfoContainerBottom>
          <CountInput count={count} setCount={setCount} />
          <CustomButton
            isOutline={false}
            title={strings.productPage.addToCart}
            onClick={() => {
              addToCartOnClickHandler(product.id, count);
            }}
          />
        </InfoContainerBottom>
      </InfoContainer>
    </Container>
  );
};

export default ProductPage;
