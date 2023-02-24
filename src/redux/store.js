import { configureStore } from "@reduxjs/toolkit";
import shoesReducer from "./slices/shoesSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    shoes: shoesReducer,
    allCart: cartReducer,
  },
});
