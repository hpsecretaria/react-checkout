import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Item } from "../models/item";
import { RootState } from "./index";

type CartItem = {
  item: Item;
  quantity: number;
};

type State = {
  cartItems: CartItem[];
};

const usersInitialState: State = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: usersInitialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const idx = state.cartItems.findIndex(
        (c) => c.item.SKU === action.payload.SKU
      );

      if (idx < 0) {
        state.cartItems.push({
          item: action.payload,
          quantity: 1,
        });
        return;
      }

      state.cartItems[idx].quantity++;
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      const idx = state.cartItems.findIndex(
        (c) => c.item.SKU === action.payload.SKU
      );

      const quantity = state.cartItems[idx].quantity;

      if (quantity === 1) {
        state.cartItems.splice(idx, 1);
        return;
      }

      state.cartItems[idx].quantity--;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem } = cartSlice.actions;

export const cartItems = (state: RootState) => state.cart.cartItems;
