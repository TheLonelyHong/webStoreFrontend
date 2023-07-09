import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//https://fakestoreapiserver.reactbd.com/products

export const fetchNewProduct = createAsyncThunk(
        'product/fetchNewProduct',
        async() => {
                try {
                        const getProduct = await axios.get('https://fakestoreapiserver.reactbd.com/products');
                        const response = getProduct.data;
                        const filterOldProduct = response.filter((item) => item.isNew === true);
                        return filterOldProduct;
                } catch (error) {
                        console.log(error);
                }
        }
);

export const fetchSearchProduct = createAsyncThunk(
        'product/fetchSearchProduct',
        async({keyword}) => {
                 try {
                        const getProduct = await axios.get("https://fakestoreapiserver.reactbd.com/products");
                        const response = getProduct.data;
                        const filterSearchProduct = response.filter((item) => item.title.toLowerCase().split(" ").join("").startsWith(keyword) );
                        return filterSearchProduct;
                 } catch (error) {
                        console.log(error);
                 }
        }
);

export const fetchAllProduct = createAsyncThunk(
        'product/fetchAllProduct',
        async() => {
                try {
                        const getProduct = await axios.get("https://fakestoreapiserver.reactbd.com/products");
                        const response = getProduct.data;
                        return response;
                } catch (error) {
                        console.log(error);
                }
        }
);

export const fetchSingleProduct = createAsyncThunk(
        'product/fetchSingleProduct',
        async({keyword}) => {
                try {
                        const getProduct = await axios.get("https://fakestoreapiserver.reactbd.com/products");
                        const response = getProduct.data;
                        const filterSingleProduct = response.filter((item) => item.title.toLowerCase().split(" ").join("") === keyword);
                        return filterSingleProduct[0];
                } catch (error) {
                        console.log(error);
                }
        }
);