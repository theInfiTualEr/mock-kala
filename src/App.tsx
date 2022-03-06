import styled from "styled-components";
import Header from "./components/Header";

import colors from "./values/colors";

import { Route, Routes } from "react-router-dom";
import ProductPage from "./features/products/ProductPage";
import CatalogPage from "./features/catalog/CatalogPage";
import useSide from "./features/side/useSide";
import SearchProductsPage from "./features/products/SearchProductsPage";
import ProductsPage from "./features/products/ProductsPage";
import FavoriteProductsPage from "./features/products/FavoriteProductsPage";

interface ContainerProps {
  isSideOpen: boolean;
}

const Container = styled.div<ContainerProps>`
  background-color: ${colors.primary};
  width: 100vw;
  height: 100vh;
  overflow: ${(props) => (props.isSideOpen ? "hidden" : "scroll")};
`;

function App() {
  const side = useSide();

  return (
    <Container isSideOpen={side !== null}>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search/*" element={<SearchProductsPage />} />
        <Route path="/favorites" element={<FavoriteProductsPage />} />
      </Routes>
      {side}
    </Container>
  );
}

export default App;
