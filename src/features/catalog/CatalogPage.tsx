import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
import CatalogCard from "./CatalogCard";
import { selectAllCatalog } from "./catalogSlice";
import { fetchCategories } from "./thunks";

const CatalogContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
`;

const CatalogPage = () => {
  const dispatch = useDispatch();

  const catalog = useSelector(selectAllCatalog);
  const fetchStatus = useSelector((state: RootState) => state.catalog.status);

  useEffect(() => {
    if (fetchStatus === "failed" || fetchStatus === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, fetchStatus]);

  function renderCatalogs(): JSX.Element[] {
    const catalogElements = catalog.map((category) => (
      <CatalogCard
        id={category.title}
        key={category.title}
        title={category.title}
        picture={category.image}
      />
    ));

    return catalogElements;
  }

  return (
    <>
      <CatalogContainer>{renderCatalogs()}</CatalogContainer>
    </>
  );
};

export default CatalogPage;
