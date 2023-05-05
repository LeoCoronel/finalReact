import { configureStore } from "@reduxjs/toolkit";
import shoesReducer from "./slices/shoesSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import ordersReducer from "./slices/orders/orders-reducer";

export const store = configureStore({
  reducer: {
    shoes: shoesReducer,
    allCart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
  },
});
