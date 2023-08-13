import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: [],

  totalAmount: 0,
};

const burgerBuilderSlice = createSlice({
  name: "burgerBuilder",
  initialState,
  reducers: {
    addIngredient(state, action) {
      const newItem = action.payload;
      const existingItem = state.ingredients.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        const tempProduct = {
          ...newItem,
          quantity: 1,

          totalPrice: newItem.price,
        };
        state.ingredients.push(tempProduct);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.ingredients.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    removeIngredient(state, action) {
      const id = action.payload;
      const existingItem = state.ingredients.find((item) => item.id === id);
      if (existingItem) {
        state.ingredients = state.ingredients.filter((item) => item.id !== id);
      }
      state.totalAmount = state.ingredients.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    setIncreaseIngredientQTY: (state, action) => {
      const itemIndex = state.ingredients.find(
        (item) => item.id === action.payload.id
      );
      itemIndex.quantity++;
      itemIndex.totalPrice =
        Number(itemIndex.totalPrice) + Number(action.payload.price);

      state.totalAmount = state.ingredients.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    setDecreaseIngredientQTY: (state, action) => {
      const itemIndex = state.ingredients.find(
        (item) => item.id === action.payload.id
      );
      if (itemIndex.quantity > 0) {
        itemIndex.quantity--;
        itemIndex.totalPrice =
          Number(itemIndex.totalPrice) - Number(action.payload.price);
      }

      state.totalAmount = state.ingredients.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

export const {
  addIngredient,
  removeIngredient,
  setIncreaseIngredientQTY,
  setDecreaseIngredientQTY,
} = burgerBuilderSlice.actions;

export default burgerBuilderSlice.reducer;
