import { API_URL, API_URL_BY_SLUG } from "../utils/constants";

export const getAllProducts = async (categorie: string, limit: number, page: number) => {
  const fetchAllProducts = await fetch(
    `${API_URL}${categorie}?limit=${limit}&page=${page}`
  );
  return await fetchAllProducts.json();
}

export const getProductBySlug = async (slug: string) => {
  const fetchOneProductBySlug = await fetch(`${API_URL_BY_SLUG}${slug}`);
  return await fetchOneProductBySlug.json();
}