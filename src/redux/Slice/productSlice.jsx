import { createSlice } from '@reduxjs/toolkit';
import { fetchNewProduct , fetchSearchProduct , fetchAllProduct , fetchSingleProduct } from '../Thunk/productThunk';

const productSlice = createSlice({
        name:"product",
        initialState:{
                allProduct:[],
                newProduct:[],
                searchProduct:[],
                tempProduct:[],
                singleProduct:{},
                loading:false,
                searchLoading:false
        },
        reducers:{
                        clearSearchProduct:(state) => {
                                        state.searchProduct = [];
                        },
                        searchWord:(state , action) => {
                                        const { keyword } = action.payload;

                                        if(keyword){
                                                state.allProduct = state.tempProduct.filter(item => item.title.toLowerCase().split(" ").join("").startsWith(keyword) );
                                        }else{
                                                state.allProduct = [...state.tempProduct];
                                        }
                        },
                        searchCategory:(state , action) => {
                                        const { keyword } = action.payload;

                                        if(keyword === "men"){
                                                state.allProduct = state.tempProduct.filter(item => item.category === keyword);
                                        }else if(keyword === "women"){
                                                state.allProduct = state.tempProduct.filter(item => item.category === keyword);
                                        }else if(keyword === "kids"){
                                                state.allProduct = state.tempProduct.filter(item => item.category === keyword);
                                        }else{
                                                state.allProduct = [...state.tempProduct];
                                        }
                        },
                        searchPrice:(state , action) => {
                                        const { keyword } = action.payload;
                                        state.allProduct = state.tempProduct.filter(item => +item.price >= keyword);
                        },
                        searchSort:(state , action) => {
                                        const { keyword } = action.payload;

                                        if(keyword === "price-(lth)"){
                                                        state.allProduct = state.allProduct.sort(function(a,b){
                                                                        return a.price - b.price;
                                                        });
                                        }else if(keyword === "price-(htl)"){
                                                        state.allProduct = state.allProduct.sort(function(a,b){
                                                                        return b.price - a.price;
                                                        });
                                        }else if(keyword === "name-a"){
                                                        state.allProduct = state.allProduct.sort(function(a,b){
                                                                        return b.title.localeCompare(a.title);
                                                        });
                                        }else if(keyword === "name-z"){
                                                        state.allProduct = state.allProduct.sort(function(a,b){
                                                                        return a.title.localeCompare(b.title);
                                                        });
                                        }else if(keyword === ""){
                                                        state.allProduct = [...state.tempProduct];
                                        }
                        }
        },
        extraReducers:(builder) => {
                        builder
                                .addCase(fetchNewProduct.pending , (state) => {
                                        state.loading = true;
                                })
                                .addCase(fetchNewProduct.fulfilled , (state , action) => {
                                        state.loading = false;
                                        state.newProduct = [...action.payload];
                                })
                                .addCase(fetchNewProduct.rejected , (state) => {
                                        state.loading = false;
                                        state.newProduct = [];
                                })
                                .addCase(fetchSearchProduct.pending , (state) => {
                                        state.searchLoading = true;
                                })
                                .addCase(fetchSearchProduct.fulfilled , (state , action) => {
                                        state.searchLoading = false;
                                        state.searchProduct = [...action.payload];
                                })
                                .addCase(fetchSearchProduct.rejected , (state) => {
                                        state.searchLoading = false;
                                        state.searchProduct = [];
                                })
                                .addCase(fetchAllProduct.pending , (state) => {
                                        state.loading = true;
                                })
                                .addCase(fetchAllProduct.fulfilled , (state , action) => {
                                        state.loading = false;
                                        state.allProduct = [...action.payload];
                                        state.tempProduct = [...action.payload];
                                })
                                .addCase(fetchAllProduct.rejected , (state) => {
                                        state.loading = false;
                                        state.allProduct = [];
                                        state.tempProduct = [];
                                })
                                .addCase(fetchSingleProduct.pending , (state) => {
                                        state.loading = true;
                                })
                                .addCase(fetchSingleProduct.fulfilled , (state , action) => {
                                        state.loading = false;
                                        state.singleProduct = action.payload;
                                })
                                .addCase(fetchSingleProduct.rejected , (state) => {
                                        state.loading = false;
                                        state.singleProduct = {};
                                })
        }
});

export const { clearSearchProduct , searchWord , searchCategory , searchPrice , searchSort} = productSlice.actions;

export default productSlice.reducer;