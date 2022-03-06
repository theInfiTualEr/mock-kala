import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import ResponseProduct from "../products/types/ResponseProduct";
import Category from "./types/Category";
import ResponseCategory from "./types/ResponseCategory";

async function fetchCategoryImage(categoryName: string): Promise<string> {
  const categoryNameParsed = categoryName.replaceAll(" ", "%20");
  const url = `https://fakestoreapi.com/products/category/${categoryNameParsed}`;

  const response = await fetch(url);
  const json: ResponseProduct[] = await response.json();

  return json[0].image;
}

async function generateCategories(
  responseCatalogs: ResponseCategory[]
): Promise<Category[]> {
  const catalogs: Category[] = [];

  for (let i = 0; i < responseCatalogs.length; i++) {
    const responseCatalog = responseCatalogs[i];

    const catalogImg = await fetchCategoryImage(responseCatalog);

    const id = nanoid();

    const catalog: Category = {
      id: id,
      title: responseCatalog,
      image: catalogImg,
    };

    catalogs.push(catalog);
  }

  return catalogs;
}

export const fetchCategories = createAsyncThunk(
  "catalog/fetchCatalog",
  async (): Promise<Category[]> => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const json: ResponseCategory[] = await response.json();

    const categories = generateCategories(json);

    return categories;
  }
);
