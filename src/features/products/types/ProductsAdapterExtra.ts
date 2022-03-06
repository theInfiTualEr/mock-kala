type ProductsAdapterExtra = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
};

export default ProductsAdapterExtra;
