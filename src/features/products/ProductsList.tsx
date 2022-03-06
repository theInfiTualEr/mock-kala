import { Rings } from "react-loader-spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import Product from "./types/Product";

const ProductsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
`;

type Props = {
  products: Product[];
  fetchStatus: "idle" | "loading" | "succeeded" | "failed";
  fetchError: string | undefined;
};

const ProductsList: React.FC<Props> = ({
  products,
  fetchError,
  fetchStatus,
}) => {
  if (fetchStatus === "loading") {
    return (
      <ProductsContainer>
        <Rings height="100" width="100" color="grey" ariaLabel="loading" />
      </ProductsContainer>
    );
  }

  if (fetchStatus === "failed") {
    return (
      <ProductsContainer>
        <p>{fetchError}</p>
      </ProductsContainer>
    );
  }

  function renderProducts(): JSX.Element[] {
    const productElements = products.map((product) => (
      <Link key={product.id} to={`/product/${product.id}`}>
        <ProductCard
          isBigger={false}
          id={product.id}
          title={product.title}
          price={product.price}
          picture={product.image}
          isFav={product.isFav}
        />
      </Link>
    ));

    return productElements;
  }
  return <ProductsContainer>{renderProducts()}</ProductsContainer>;
};

export default ProductsList;
