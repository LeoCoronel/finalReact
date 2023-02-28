import { configureStore } from "@reduxjs/toolkit";
import shoesReducer from "./slices/shoesSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    shoes: shoesReducer,
    allCart: cartReducer,
    user: userReducer,
  },
});
