import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cart.findIndex((x) => x.id === action.payload.id);
      if (exist >= 0) {
        state.cart[exist].qty += 1;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    getCartTotal: (state) => {
      let { totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += qty;
          return cartTotal;
        },
        {
          totalPrice: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    increaseItemQty: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    decreaseItemQty: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (item.qty === 1) {
            state.cart = state.cart.filter(
              (item) => item.id !== action.payload.id
            );
          } else {
            return { ...item, qty: item.qty - 1 };
          }
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQty,
  decreaseItemQty,
} = cartSlice.actions;

export default cartSlice.reducer;
