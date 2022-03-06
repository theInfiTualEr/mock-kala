type CatalogAdapterExtra = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
};

export default CatalogAdapterExtra;
