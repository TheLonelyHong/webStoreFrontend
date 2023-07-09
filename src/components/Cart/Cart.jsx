import React, { useEffect, useState } from 'react';
import { Breadcrum } from '../../utils/tools';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { calculateTotal , clearCart } from '../../redux/Slice/cartSlice';
import Buttons from './Buttons';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {

  const cart = useSelector(state => state.cart);
  const [ paynow , setPaynow ] = useState(false);
  const dispatch = useDispatch();

  const payment = async(token) => {
          await axios.post("http://localhost:7000/paynow" , {
                amount:cart.total_price * 100,
                token
          }).then(() => {
                dispatch(clearCart());
          });
  }

  useEffect(() => {
          dispatch(calculateTotal());
  } , []);


  const navigation = [
        {name:"Home" , href:"/" , index:0},
        {name:"Product" , href:"/products" , index:1},
        {name:"Cart" , href:"/cart" , index:3}
  ];

  return (
    <div className='dark:bg-slate-900 min-h-[80vh]'>
              <Breadcrum navigation={navigation}/>
              <div className='container py-5 mx-auto px-1 lg:px-5'>
                        {
                          cart.cart.length === 0 ? 
                            <div className='flex flex-col'>
                              <h1 className='text-center text-2xl text-slate-900 dark:text-slate-50 font-medium tracking-tight'>Oops , no products in your cart
                              <div>
                                  <NavLink
                                      to="/products"
                                      className="text-center text-xl text-slate-900 dark:text-slate-50 font-normal tracking-tight underline hover:text-indigo-600"
                                  >
                                        Back to product {"->"}
                                  </NavLink>
                              </div>
                              </h1>
                            </div>
                          : 
                          <div>
                                <ul className='divide-y divide-slate-500 dark:divide-slate-50'>
                                    {cart.cart.map((item) => (
                                                <li className='flex gap-x-3 py-6' key={item.id}>
                                                        <div className='basis-1/5 flex justify-center items-center'>
                                                                <LazyLoadImage
                                                                    src={`${item.image}`}
                                                                    effect='blur'
                                                                    alt=''
                                                                    className='w-full h-44 rounded-sm object-cover'
                                                                />
                                                        </div>
                                                        <div className='basis-3/5 flex flex-col gap-y-4'>
                                                              <h1 className='text-lg text-slate-900 dark:text-slate-50 font-medium tracking-tight'>{item.title}</h1>
                                                              <p className='text-base text-slate-900 dark:text-slate-50 font-medium italic'>RM{item.price} per unit</p>
                                                              <p className='text-base text-slate-900 dark:text-slate-50 font-semibold'>Quantity: {item.quantity}</p>
                                                              <p className='text-base text-slate-900 dark:text-slate-50 font-semibold'>Price: RM{item.quantity * item.price}</p>
                                                        </div>
                                                        <div className='basis-1/5'>
                                                                <Buttons quantity = {item.quantity} itemId = {item.id}/>
                                                        </div>
                                                </li>
                                    ))}
                                </ul>
                                <div className='w-full mt-5 flex justify-end items-center'>
                                        <div className='w-96 h-auto px-5 py-5 border-indigo-700 border rounded-md dark:border-slate-50'>
                                              <h1 className=' text-2xl text-indigo-700 dark:text-white font-medium tracking-tight underline py-2'>Checkout</h1>
                                              <p className='text-xl text-slate-900 dark:text-slate-50 font-medium py-2'>Total quantity : {cart.total_quantity}</p>
                                              <p className='text-xl text-slate-900 dark:text-slate-50 font-medium py-2'>Total price : RM{cart.total_price}</p>
                                              <button
                                                  type='button'
                                                  className='w-full bg-indigo-600 text-white py-2 text-lg font-medium rounded-sm hover:bg-indigo-800 focus:outline-none focus:ring-1
                                                            focus:ring-offset-2 focus:ring-indigo-600 focus:bg-white focus:text-indigo-600 mt-2'
                                                  onClick={() => setPaynow(true)}
                                              >
                                                  Proceed to checkout
                                              </button>
                                              {
                                                paynow && <StripeCheckout
                                                                stripeKey='pk_test_51MVXLeGP27pAeUGnqP1DjI1hhbs9Zpk6lpKrqrerXKX6u00iFvtmLk2qEdNTfZ8bnuDTtfWu70iXyYFMzHDV8L0K00P8Aktdkk'
                                                                name='The Web Store'
                                                                amount={cart.total_price * 100}
                                                                label='Pay now'
                                                                description={`Your payment is ${cart.total_price}`}
                                                                token={payment}
                                                                className="mt-3"
                                                          />
                                              }
                                        </div>
                                </div>
                          </div>
                        }
              </div>
    </div>
  )
}

export default Cart