import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Slice/productSlice';
import cartReducer from './Slice/cartSlice';

export const Store = configureStore({
        reducer:{
                product:productReducer,
                cart:cartReducer
        }
});