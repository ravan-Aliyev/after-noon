import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalValue: 0,
    change: false,
  },
  reducers: {
    addItem(state, action) {
      state.change = true;
      state.totalValue += action.payload.price * action.payload.amount;
      const exitingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (exitingItem) {
        exitingItem.amount += action.payload.amount;
        exitingItem.totalPrice += action.payload.price * action.payload.amount;
      } else {
        state.items.push(action.payload);
      }
    },

    incraseItem(state, action) {
      state.change = true;
      const exitingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (exitingItem) {
        state.totalValue += exitingItem.price;
        exitingItem.amount++;
      }
    },

    removeItem(state, action) {
      state.change = true;
      const exitingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (exitingItem) {
        state.totalValue -= exitingItem.price;
        exitingItem.amount--;
      }
    },

    updateItem(state, action) {
      state.change = true;
      const exitingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      exitingItem.amount = action.payload.amount;
      exitingItem.totalPrice = action.payload.price * action.payload.amount;

      state.totalValue = state.items
        .map((item) => item.totalPrice)
        .reduce((pre, val) => pre + val, 0);
    },

    clearItem(state, action) {
      state.change = true;
      const exitingItem = state.items.find(
        (item) => item.id === action.payload
      );
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalValue -= exitingItem.totalPrice;
    },

    replaceItem(state, action) {
      state.items = action.payload.items;
      state.totalValue = action.payload.totalValue;
    },
  },
});

export const cartActions = cartSlice.actions;

// const arr = [{ id: 4 }];
// const exting = arr.filter((item) => item.id === 4);

// exting.id = 5;

// console.log(arr);
