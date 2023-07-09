import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
            name:"cart",
            initialState:{
                    cart:[],
                    total_quantity:0,
                    total_price:0
            },
            reducers:{
                    addToCart:(state , action) => {
                            const { id , title , quantity , image , price } = action.payload;
                            const tempProduct = state.cart.find((item) => item.id === id + title);
                            if(tempProduct){
                                        const itemsList = state.cart.map((item) => {
                                                    if(item.id === id + title){
                                                                let newQuantity = item.quantity + quantity;
                                                                return {...item , quantity: newQuantity};
                                                    }
                                                    return item;
                                        })
                                        state.cart = [...itemsList];
                            }else{
                                        const itemLog = {
                                                id: id + title,
                                                title:title,
                                                quantity:quantity,
                                                image:image,
                                                price:price
                                        }

                                        state.cart = [...state.cart , itemLog]
                            }
                    },
                    addOrReduce:(state , action) => {
                            const { id , type } = action.payload;
                            const tempProduct = state.cart.map((item) => {
                                            if(item.id === id){
                                                        if(type === "ADD"){
                                                                let newQuantity = item.quantity + 1;
                                                                return {...item , quantity:newQuantity}
                                                        }else if(type === "DEC"){
                                                                let newQuantity = item.quantity - 1;
                                                                return {...item , quantity:newQuantity};
                                                        }
                                            }
                                            return item
                            }).filter((item) => item.quantity !== 0);

                            state.cart = [...tempProduct];
                    },
                    calculateTotal:(state) => {
                                let { total_price , total_quantity } = state.cart.reduce((initialValue , accumulator) => {
                                            let { price , quantity } = accumulator;
                                            let totalPrice = Number(price) * Number(quantity);
                                            initialValue.total_price += totalPrice;
                                            initialValue.total_quantity += quantity;
                                            return initialValue;
                                } , {
                                        total_price:0,
                                        total_quantity:0
                                });

                                state.total_price = total_price;
                                state.total_quantity = total_quantity;
                    },
                    clearCart:(state) => {
                                state.cart = [];
                    }
            }
});

export const { addToCart , addOrReduce , calculateTotal , clearCart } = cartSlice.actions;

export default cartSlice.reducer;