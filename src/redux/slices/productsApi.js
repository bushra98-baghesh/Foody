import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.oryze.gomaplus.tech/api/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProductDetails: builder.query({
      query: (id) => `show_product/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductDetailsQuery } =
  productsApi;
