import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewProduct } from '../../redux/Thunk/productThunk';
import { Swiper , SwiperSlide } from 'swiper/react';
import { Loader , Star } from '../../utils/tools';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Slideer = () => {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  const lowerCase = (str) => {
        return str.toLowerCase().split(" ").join("");
  }

  useEffect(() => {
        dispatch(fetchNewProduct());
  } , []);

  return (
    <div>
          {
            product.loading ? 
              <div className='flex justify-center py-5'>
                  <Loader/>
              </div>
            : 
              <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  pagination={{
                      clickable:true
                  }}
                  breakpoints={{
                        640:{
                            slidesPerView:2
                        },
                        1024:{
                            slidesPerView:3
                        },
                        1280:{
                            slidesPerView:4
                        }
                  }}
                  modules={[Pagination]}
                  className='mySwiper px-10 py-10 rounded-sm'
                  style={{
                      "--swiper-pagination-color":"blue"
                  }}
              >
                  {
                    product.newProduct.map((item) => (
                      <SwiperSlide key={item.title}>
                          <div className='relative isolation rounded-md border-2'>
                              <div className='absolute top-3 right-0 bg-black text-slate-50 dark:bg-slate-50 dark:text-slate-900 text-base font-medium px-3 py-2 z-10'>Sale</div>
                                <div className='w-full h-96 bg-white dark:bg-black'>
                                      <LazyLoadImage
                                          src={`${item.image}`}
                                          alt=''
                                          className='w-full h-full object-contain rounded-md opacity-90'
                                      />
                                </div>
                                <div className='px-5 py-5 bg-white dark:bg-slate-800'>
                                    <div className='flex items-center justify-between'>
                                      <h1 className='text-slate-900 dark:text-slate-50 text-lg font-medium tracking-tight italic'>
                                          {item.title}
                                      </h1>
                                      <span className='badge-pink'>{item.isNew ? "New" : ""}</span>
                                    </div>
                                    <div className='mt-4'>
                                        <h1 className='text-slate-900 dark:text-slate-50 text-base font-normal tracking-tight flex items-center gap-x-5'>
                                            RM <del className=' text-slate-400 dark:text-slate-200'>{item.oldPrice}</del> {"->"} <span className='text-lg font-semibold text-slate-950 dark:text-slate-50'>{item.price}</span>
                                        </h1>
                                    </div>
                                    <div className='mt-4'>
                                        <div className='flex items-center gap-x-3'>
                                            <Star value={item.rating}/>
                                            <span className='font-medium text-slate-900 dark:text-slate-50 text-base'>{item.rating}/5 ratings</span>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                          <NavLink
                                            className='text-slate-900 dark:text-slate-50 text-lg underline font-medium hover:text-fuchsia-600 dark:hover:text-slate-900'
                                            to={`/single/${lowerCase(item.title)}`}
                                          >
                                            View {"->"}
                                          </NavLink>
                                    </div>
                                </div>
                          </div>
                      </SwiperSlide>
                    ))
                  }
              </Swiper>
          }
    </div>
  )
}

export default Slideer