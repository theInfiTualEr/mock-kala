import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import ProductsList from "./ProductsList";
import { selectFavoriteProducts, selectProductsStatus } from "./productsSlice";
import { fetchProducts } from "./thunks";

const FavoriteProductsPage = () => {
  const favoriteProducts = useSelector((state: RootState) =>
    selectFavoriteProducts(state)
  );

  const fetchStatus = useSelector(selectProductsStatus);
  const fetchError = useSelector((state: RootState) => state.products.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus === "failed" || fetchStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, fetchStatus]);

  return (
    <ProductsList
      products={favoriteProducts}
      fetchError={fetchError}
      fetchStatus={fetchStatus}
    />
  );
};

export default FavoriteProductsPage;
