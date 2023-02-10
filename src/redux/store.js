import { configureStore } from "@reduxjs/toolkit";
import shoesReducer from './slices/shoesSlice';

export const store = configureStore({
    reducer: {
        shoes: shoesReducer
    },
});