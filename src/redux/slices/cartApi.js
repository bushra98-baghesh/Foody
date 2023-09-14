import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.foody.gomaplus.tech/api" }),
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (cartData) => {
        const data = cartData.products;
        const products = data.map((item) => {
          return {
            product_id: item.id,
            extraIngredients: item.extraIngredients.map((ing) => {
              return { ingredient_id: ing.id };
            }),
            qty: item.quantity,
            note: item.note,
          };
        });
        const datatosend = {
          table_id: 1,
          branch_id: 1,
          products,
        };
        console.log(datatosend, "product");
        return {
          url: "/order/add",
          method: "POST",
          body: datatosend,
        };
      },
    }),
  }),
});

export const { useAddToCartMutation } = cartApi;
