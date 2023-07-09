import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../../redux/Thunk/productThunk';
import { Loader , Breadcrum , Star , showMsg } from '../../utils/tools';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlineMinus , AiOutlinePlus } from 'react-icons/ai';
import { addToCart } from '../../redux/Slice/cartSlice';

const SinglePage = () => {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  const { id } = useParams();
  const [ count , setCount ] = useState(1);

  const navigation = [
        {name:"Home" , href:"/" , index:0},
        {name:"Product" , href:"/products" , index:1},
        {name:`${id}` , href:`/single/${id}` , index:3}
  ];

  const addCount = () => {
          setCount(count + 1);
  }

  const minusCount = () => {
          if(count <= 1){
                setCount(count);
          }else{
                setCount(count - 1)
          }
  }

  const AddToCart = (id , title , image , price) => {
          dispatch(addToCart({id , title , quantity:count , image , price}));
          showMsg("SUCCESS" , "Added to cart");
  }

  useEffect(() => {
        dispatch(fetchSingleProduct({keyword:id}));
  } , []);

  return (
    <>
       <div className='w-full dark:bg-slate-900'>
              <Breadcrum navigation={navigation}/>
                    {
                      product.loading ? 
                          <div className='px-3 py-3 flex justify-center items-center'>
                                  <Loader/>
                          </div>
                        : 
                          product.singleProduct ? 
                            <div className='container mx-auto flex flex-col lg:flex-row py-5'>
                                    <div className='basis-1/2 p-3 lg:p-8 border-b-2 lg:border-b-0 border-r-0 lg:border-r-2 border-slate-300 relative z-0'>
                                        <h1 className='absolute top-7 right-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-lg font-medium px-6 py-2 z-10'>Sale</h1>
                                            <LazyLoadImage
                                                src={`${product.singleProduct.image}`}
                                                className='w-full h-auto object-cover rounded-md opacity-95'
                                                effect='blur'
                                                alt=''
                                                draggable={false}
                                            />
                                    </div>
                                    <div className='basis-1/2 px-5 py-5'>
                                          <div className='flex justify-between items-center'>
                                              <h1 className='text-slate-900 dark:text-slate-50 text-4xl font-medium tracking-tight capitalize'>{product.singleProduct.title}</h1>
                                              {
                                                product.singleProduct.isNew ? 
                                                  <span className='badge-pink'>New</span>
                                                : null
                                              }
                                          </div>
                                          <h2 className='text-slate-900 dark:text-slate-50 text-2xl font-medium py-6'>
                                                RM <del className='text-slate-400 font-normal'>{product.singleProduct.oldPrice}</del> {"->"} <span className='font-semibold'>{product.singleProduct.price}</span>
                                          </h2>
                                          <div>
                                              <Star value={product.singleProduct.rating}/>
                                          </div>
                                          <h3 className='text-slate-900 dark:text-slate-50 text-2xl font-medium py-6 capitalize'>{product.singleProduct.category}</h3>
                                          <p className='text-slate-900 dark:text-slate-50 font-normal text-xl py-6 leading-6 italic'>{product.singleProduct.description}</p>
                                          <div className='py-6 w-24 flex justify-between items-center'>
                                                <button
                                                    type='button'
                                                    className='px-1 py-1 rounded-full bg-transparent cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:border-slate-900
                                                               focus:border focus:ring-transparent dark:focus:border-slate-50'
                                                    onClick={minusCount}
                                                >
                                                    <AiOutlineMinus
                                                        className='h-4 w-4 text-slate-900 dark:text-slate-50'
                                                    />
                                                </button>
                                                <span className='text-slate-900 dark:text-slate-50 text-2xl font-medium'>{count}</span>
                                                <button
                                                    type='button'
                                                    className='px-1 py-1 rounded-full bg-transparent cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:border-slate-900
                                                               focus:border focus:ring-transparent dark:focus:border-slate-50'
                                                    onClick={addCount}
                                                >
                                                    <AiOutlinePlus
                                                        className='h-4 w-4 text-slate-900 dark:text-slate-50'
                                                    />
                                                </button>
                                          </div>
                                          <div className='py-3'>
                                                <button 
                                                    type='button'
                                                    className='px-3 py-2 rounded-md bg-indigo-600 text-slate-50 text-xl font-normal focus:outline-none focus:ring-1 focus:ring-offset-2
                                                               focus:ring-indigo-600 focus:bg-white focus:text-indigo-600 hover:bg-indigo-800'
                                                    onClick={() => AddToCart(product.singleProduct._id , product.singleProduct.title , product.singleProduct.image , product.singleProduct.price)}
                                                >Add to cart</button>
                                          </div>
                                    </div>
                            </div>
                          :
                            <div className='container mx-auto py-3'>
                                  <h1 className='text-2xl text-slate-900 font-medium tracking-tight text-center'>Oops , {id} is not found</h1>
                            </div>
                      }
        </div>
    </>
  )
}

export default SinglePage