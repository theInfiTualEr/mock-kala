import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../store";
import { selectFilteredProducts } from "../filter/filterSlice";
import ProductsList from "./ProductsList";
import { selectProductsByName, selectProductsStatus } from "./productsSlice";
import { fetchProducts } from "./thunks";

const SearchProductsPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const fetchStatus = useSelector(selectProductsStatus);
  const fetchError = useSelector((state: RootState) => state.products.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus === "failed" || fetchStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, fetchStatus]);

  const paramName = searchParams.get("name");
  const searchQuery = paramName === null ? "" : paramName;

  const matchingProducts = useSelector((state: RootState) =>
    selectProductsByName(state, searchQuery)
  );

  const filteredMatchingProducts = useSelector((state: RootState) =>
    selectFilteredProducts(state, matchingProducts)
  );

  return (
    <ProductsList
      products={filteredMatchingProducts}
      fetchError={fetchError}
      fetchStatus={fetchStatus}
    />
  );
};

export default SearchProductsPage;
