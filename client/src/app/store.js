import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  },
});

export default store;
