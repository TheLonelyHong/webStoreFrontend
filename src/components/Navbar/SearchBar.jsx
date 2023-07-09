import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { fetchSearchProduct } from '../../redux/Thunk/productThunk';
import { clearSearchProduct } from '../../redux/Slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../utils/tools';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlineClose } from 'react-icons/ai';

//https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600

const SearchBar = ({px , py}) => {

  const [isOpen , setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  const lowerCase = (str) => {
    return str.toLowerCase().split(" ").join("");
  }

  const handleInput = (e) => {
        const keyword = e.target.value;
        if(keyword){
          dispatch(fetchSearchProduct({keyword:keyword}));
        }

        dispatch(clearSearchProduct());
  } 

  return (
    <form
        className={`${px} ${py} bg-transparent w-full relative z-0`}
    >
        <label className='relative block'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                        <BiSearch
                            className='h-5 w-5 text-violet-400 dark:text-slate-300'
                        />
                </span>
                <input 
                    type='text'
                    placeholder='Search here...'
                    className='placeholder:italic placeholder:text-slate-400 dark:text-slate-50 dark:placeholder:text-slate-300 block bg-transparent w-full border border-violet-600 
                               rounded-md pl-9 shadow-sm dark:border-slate-50 dark:focus:border-slate-300
                               sm:text-sm focus:outline-none focus:ring-0 focus:ring-transparent focus:border-violet-800'
                    onChange={(e) => handleInput(e)}
                    onFocus={() => setIsOpen(true)}
                />
        </label>
        {
          isOpen ? 
            <div className='fixed top-18 z-10 bg-slate-100 h-96 w-[96%] md:w-[80%] xl:w-[70%] 2xl:w-[50%] mx-auto overflow-y-scroll rounded-md px-5 py-5 shadow-lg'>
                <div
                  className='flex items-center justify-between px-3 py-3'
                >
                    <LazyLoadImage
                      src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                      alt=''
                      effect='blur'
                      className='h-10 w-10'
                    />
                    <button
                        type='button'
                        className='bg-transparent text-violet-600 px-3 py-3 focus:outline-none focus:ring-offset-2 focus:ring-1 focus:ring-violet-500 '
                        onClick={() => setIsOpen(false)}
                    >
                        <AiOutlineClose
                            className='h-6 w-6'
                        />
                    </button>
                </div>
                <hr className='mt-3 mb-3'/>
                  {
                    product.searchProduct.length === 0 ? 
                        <div className='flex items-center justify-center'>
                            <h1 className=' text-3xl font-medium text-slate-900'>Oops , no items found</h1>
                        </div>
                    : 
                      product.searchLoading ? 
                        <div className='flex items-center justify-center'>
                              <Loader/>
                        </div>
                      : 
                        <ul className=' divide-y divide-slate-900'>
                            {
                              product.searchProduct.map((item) => (
                                    <li key={item.title} className='px-3 py-10 flex items-center gap-x-10'>
                                          <div>
                                              <LazyLoadImage
                                                src={`${item.image}`}
                                                alt=''
                                                className=' w-32 h-auto rounded-sm object-cover'
                                              />
                                          </div>
                                          <div>
                                                <h1 className='text-lg font-semibold text-slate-900'>{item.title}</h1>
                                                <p className='text-base font-medium text-slate-900 pb-7'>RM {item.price}.00</p>
                                                <NavLink
                                                  to={`/single/${lowerCase(item.title)}`}
                                                  onClick={() => setIsOpen(false)}
                                                  className="text-base font-medium text-slate-900 underline hover:text-fuchsia-700"
                                                >
                                                  View {"->"}
                                                </NavLink>
                                          </div>
                                    </li>
                              ))
                            }
                        </ul>
                  }
            </div>          
          : null
        }
    </form>
  )
}

export default SearchBar