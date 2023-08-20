import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setAddItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        const tempProduct = {
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        };
        state.cartItems.push(tempProduct);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    setIncreaseItemQTY: (state, action) => {
      state.totalQuantity++;
      const itemIndex = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      itemIndex.quantity++;
      itemIndex.totalPrice =
        Number(itemIndex.totalPrice) + Number(action.payload.price);

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemIndex.quantity > 0) {
        state.totalQuantity--;
        itemIndex.quantity--;
        itemIndex.totalPrice =
          Number(itemIndex.totalPrice) - Number(action.payload.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});
export const {
  setAddItemToCart,
  deleteItem,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
} = CartSlice.actions;

export default CartSlice.reducer;
