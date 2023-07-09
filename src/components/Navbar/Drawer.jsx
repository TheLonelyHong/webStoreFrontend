import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

//https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600

const Drawer = ({navigation , isOpen , closeDrawer}) => {

    const cart = useSelector(state => state.cart);

  return (
    <div className={`min-h-[100vh] w-80 fixed inset-y-0 bg-slate-100 ${isOpen} transition-all duration-700 dark:bg-slate-900 z-20`}>
            <div className='px-5 py-3 flex justify-between items-center'>
                        <LazyLoadImage
                            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                            effect='blur'
                            className='w-8 h-8'
                            draggable={false}
                        />
                        <button
                            type='button'
                            className='bg-transparent text-violet-600 dark:text-slate-50 px-3 py-3 focus:outline-none focus:ring-offset-2 focus:ring-1 focus:ring-violet-500 dark:focus:ring-slate-50'
                            onClick={closeDrawer}
                        >
                            <AiOutlineClose
                                className='h-6 w-6'
                            />
                        </button>
            </div>
            <div className='px-5 py-3'>
                    {
                        navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={({isActive}) => 
                                            isActive ? 
                                                "font-semibold text-violet-600 dark:text-slate-50 text-base border-b-2 border-violet-600 dark:border-slate-50 block py-3 relative"
                                            : 
                                                "font-semibold text-violet-600 dark:text-slate-50 text-base block py-3 relative"
                                    }   
                                    onClick={closeDrawer}
                                >
                                    {item.name}
                                    {
                                        item.name === "Cart" ? 
                                            <span
                                                className='badge-pink absolute top-0 -left-5'
                                            >{cart.cart.length}</span>
                                            : null
                                    }
                                </NavLink>
                        ))
                    }
            </div>
    </div>
  )
}

export default Drawer