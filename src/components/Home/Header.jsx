import React from 'react';
import StoreSVG from '../../assets/undraw_web_shopping_re_owap.svg';
import { BsArrowRight } from 'react-icons/bs';

const navigation = [
        {name:"Top products" , href:"#topProducts"},
        {name:"Service" , href:"#services"},
        {name:"Review" , href:"#reviews"}
];

const response = [
        {name:"Customers" , value:"300+"},
        {name:"Trustworthy" , value:"99%"},
        {name:"Punctual" , value:"100%"},
        {name:"Packing" , value:"100%"}
];

const Header = () => {
  return (
    <div className='relative isolation py-32 px-3 sm:px-16 lg:px-20 xl:px-28 bg-gradient-to-tr from-[#c026d3] via-[#e879f9] to-[#f0abfc] dark:from-[#1e293b] dark:via-[#475569] dark:to-[#94a3b8] h-full'>
                <img 
                    src={`${StoreSVG}`}
                    alt=''
                    className='absolute max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl inset-y-4 right-0 2xl:right-40 sm:right-7'
                    draggable={false}
                    loading='priority'
                />
                <div className='max-w-lg translate-y-24 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl lg:translate-y-10 px-3 py-3 sm:py-8'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-50 tracking-tight'>Welcome to Web Store </h1>
                        <br/>
                        <p className=' text-lg sm:text-xl md:text-2xl text-slate-50 tracking-tight py-1 italic'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore <br/> magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className='mt-16 sm:mt-11 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4'>
                                {
                                    navigation.map((item) => (
                                            <a 
                                               href={item.href} 
                                               key={item.name}
                                               className='text-slate-50 text-base tracking-tight font-semibold flex items-center'
                                            >
                                                {item.name}
                                                <BsArrowRight
                                                 className='w-5 h-5 ml-2'
                                                />
                                            </a>
                                    ))
                                }
                        </div>
                        <div className='mt-16 sm:mt-11 md:mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4 pb-4'>
                                {
                                    response.map((item) => (
                                            <h2 
                                              key={item.name}
                                              className='text-slate-50 text-base tracking-tight font-semibold flex items-center'
                                            >
                                                {item.name}:
                                                <span className='ml-2 text-lg'>{item.value}</span>
                                            </h2>
                                    ))
                                }
                        </div>
                </div>
    </div>
  )
}

export default Header