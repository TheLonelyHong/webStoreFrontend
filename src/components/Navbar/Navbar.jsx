import React, { useEffect, useState } from 'react';
import { BiAlignRight , BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import Drawer from './Drawer';
import { useSelector } from 'react-redux';


const navigation = [
        {name:"Home" , href:"/"},
        {name:"Product" , href:"/products"},
        {name:"Cart" , href:"/cart"}
];


const Navbar = () => {

    const [ isOpen , setIsOpen ] = useState("-right-80");
    const [ theme , setTheme ] = useState("light");
    const cart = useSelector(state => state.cart);

    const openDrawer = () => {
            setIsOpen("right-0");
    }

    const closeDrawer = () => {
            setIsOpen("-right-80");
    }

    useEffect(() => {
                if(theme === "dark"){
                        document.documentElement.classList.add("dark");
                }else{
                        document.documentElement.classList.remove("dark")
                }
    } , [theme]);

  return (
    <div className='w-full bg-slate-50 dark:bg-slate-900 sticky top-0 z-50'>
        <div className='relative overflow-hidden'>
            <div className='flex justify-between md:justify-around items-center py-3'>
                <div>
                    {
                        theme === "light" ? 
                            <button
                                type='button'
                                className='bg-transparent px-4 py-4 text-violet-600'
                                onClick={() => setTheme("dark")}
                            >
                                <BiMoon
                                    className='w-6 h-6'
                                />
                            </button>
                        :
                        <button
                            type='button'
                            className='bg-transparent px-4 py-4 text-slate-50'
                            onClick={() => setTheme("light")}
                        >
                            <BsSun
                                className='w-6 h-6'
                            />
                        </button>
                    }
                </div>
                <div className='hidden md:block md:w-96 lg:w-[40rem]'>
                        <SearchBar px="px-0" py="py-0"/>
                </div>
                <div className='hidden md:block'>
                        <div className='flex justify-end items-center gap-x-7'>
                                {
                                    navigation.map((item) => (
                                            <NavLink 
                                            key={item.name} 
                                            to={item.href}
                                            className={({isActive}) => 
                                                    isActive ? 
                                                    "font-semibold text-violet-600 dark:text-slate-50 text-base px-3 mx-auto py-3 border-b-2 border-violet-600 dark:border-slate-50 relative"
                                                    : 
                                                    "font-semibold text-violet-600 dark:text-slate-50 text-base px-3 mx-auto py-3 relative"
                                            }
                                            >
                                                    {item.name}
                                                    {
                                                        item.name === "Cart" ? 
                                                            <span
                                                                className='badge-pink absolute top-0 -right-5'
                                                            >{cart.cart.length}</span>
                                                        : null
                                                    }
                                            </NavLink>
                                    ))
                                }
                        </div>
                </div>
                <div className='block md:hidden'>
                        <button
                            type='button'
                            className=' bg-transparent px-4 py-4 text-violet-600 dark:text-slate-50 focus:outline-none focus:ring-offset-2 focus:ring-1 focus:ring-violet-500 dark:focus:ring-slate-50'
                            onClick={() => openDrawer()}
                        >
                            <BiAlignRight
                                className='h-6 w-6'
                            />
                        </button>
                </div>
            </div>
            <div className='block md:hidden bg-slate-50 dark:bg-slate-900 w-full'>
                    <SearchBar px="px-3" py="py-3"/>
            </div>               
            <Drawer navigation = {navigation} isOpen = {isOpen} closeDrawer = {() => closeDrawer()}/>  
            </div> 
    </div>
  )
}

export default Navbar