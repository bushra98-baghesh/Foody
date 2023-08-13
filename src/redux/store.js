import { configureStore } from "@reduxjs/toolkit";
import burgerBuilderReducer from "./burgerBuilderSlice";

const store = configureStore({
  reducer: {
    burgerBuilder: burgerBuilderReducer,
  },
});

export default store;
