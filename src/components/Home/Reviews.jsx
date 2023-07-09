import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper , SwiperSlide } from 'swiper/react';
import { Star } from '../../utils/tools';
import { RiDoubleQuotesR } from 'react-icons/ri';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination , Autoplay } from "swiper";
const reviews = [
        {
            name:"Jane Doe",
            image:"https://plus.unsplash.com/premium_photo-1680012591225-cccb589de5ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            comment:"A good web store with good support",
            rating:4
        },
        {
            name:"Mark Dane",
            image:"https://plus.unsplash.com/premium_photo-1664279047458-ace1fa02d6d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            comment:"Good delivery with full of smiles",
            rating:4
        },
        {
            name:"Grandpa John",
            image:"https://plus.unsplash.com/premium_photo-1679769900024-b31d78676e79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            comment:"Secure Payment without any risk",
            rating:5
        },
        {
            name:"Steve Don",
            image:"https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            comment:"The nice packaging I have ever seen",
            rating:4
        },
        {
            name:"Francis Carve",
            image:"https://images.unsplash.com/photo-1643818656345-f95d1a98c923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            comment:"Delivery punctually , good service I never had before",
            rating:5
        }
];

const Reviews = () => {
  return (
    <div className='relative py-24 lg:py-32 bg-white dark:bg-slate-900' id='reviews'>
                <h1 className='text-3xl lg:text-5xl font-medium text-slate-900 dark:text-slate-50 text-center underline'>What they say</h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable:true
                    }}
                    autoplay={{
                            delay:2500,
                            disableOnInteraction:false
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
                    modules={[Pagination , Autoplay]}
                    className='mySwiper px-10 py-10'
                    style={{
                        "--swiper-pagination-color":"blue"  
                    }}
                >
                    {
                        reviews.map((item) => (
                                <SwiperSlide
                                    key={item.name}
                                    className='border-2 rounded-lg dark:border-slate-50'
                                >
                                    <div>
                                        <div
                                            className='flex justify-between items-center px-5 py-3'
                                        >
                                            <LazyLoadImage
                                                src={`${item.image}`}
                                                effect='blur'
                                                className='rounded-full h-16 w-16 object-cover shadow-sm'
                                            />
                                            <RiDoubleQuotesR
                                                className='text-slate-300 h-20 w-20 dark:text-slate-500'
                                            />
                                        </div>
                                        <h1 className='py-3 px-5 text-3xl font-medium text-slate-900 dark:text-slate-50 tracking-tight'>{item.name}</h1>
                                        <div className='py-3 px-5'>
                                                <Star value={item.rating}/>
                                        </div>
                                        <div className='py-3 px-5'>
                                                <h1 className='text-lg text-slate-900 dark:text-slate-50 font-semibold tracking-tight underline'>Comment:</h1>
                                                <p className='text-base text-slate-900 dark:text-slate-50 mt-3 font-medium tracking-tight'>
                                                    {item.comment}
                                                </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                        ))
                    }
                </Swiper>
    </div>
  )
}

export default Reviews