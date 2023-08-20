import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsApi } from "./slices/productsApi";
import { categoriesApi } from "./slices/categoriesApi";
import cartSlice from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware);
  },
});

export default store;
