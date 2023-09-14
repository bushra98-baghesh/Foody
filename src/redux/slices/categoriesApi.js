import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.foody.gomaplus.tech/api",
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "/category",
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoriesApi;
