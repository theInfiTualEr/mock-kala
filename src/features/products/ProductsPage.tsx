import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectFilteredProducts } from "../filter/filterSlice";
import ProductsList from "./ProductsList";
import { selectAllProducts, selectProductsStatus } from "./productsSlice";
import { fetchProducts } from "./thunks";

const ProductsPage: React.FC = () => {
  const products = useSelector(selectAllProducts);
  const filteredProducts = useSelector((state: RootState) =>
    selectFilteredProducts(state, products)
  );

  const dispatch = useDispatch();

  const fetchStatus = useSelector(selectProductsStatus);
  const fetchError = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (fetchStatus === "idle" || fetchStatus === "failed") {
      dispatch(fetchProducts());
    }
  }, [dispatch, fetchStatus]);

  return (
    <ProductsList
      products={filteredProducts}
      fetchError={fetchError}
      fetchStatus={fetchStatus}
    />
  );
};

export default ProductsPage;
