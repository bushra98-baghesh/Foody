import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.foody.gomaplus.tech/api",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProductDetails: builder.query({
      query: (id) => `product/${id}`,
    }),
    getProductIngredients: builder.query({
      query: (id) => `extraIng/product/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductDetailsQuery,
  useGetProductIngredientsQuery,
} = productsApi;
