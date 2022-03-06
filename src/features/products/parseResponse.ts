import Product from "./types/Product";
import ResponseProduct from "./types/ResponseProduct";

function generateProduct(responseProduct: ResponseProduct): Product {
  const product: Product = {
    ...responseProduct,
    isFav: false,
  };

  return product;
}

export function generateProducts(
  responseProducts: ResponseProduct[]
): Product[] {
  const products: Product[] = [];

  for (let i = 0; i < responseProducts.length; i++) {
    const responseProduct = responseProducts[i];

    const product = generateProduct(responseProduct);

    products.push(product);
  }

  return products;
}
