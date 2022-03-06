type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isFav: boolean;
  rating: {
    rate: number;
    count: number;
  };
};

export default Product;
