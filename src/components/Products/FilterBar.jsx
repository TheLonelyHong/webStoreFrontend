import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchWord , searchCategory , searchPrice } from '../../redux/Slice/productSlice';


const FilterBar = () => {

  const [ isRange , setIsRange ] = useState(0);
  const dispatch = useDispatch();

  const handleWords = (e) => {
        const keywords = e.target.value;
        dispatch(searchWord({keyword:keywords}));
  }

  const handleCategory = (e) => {
        const keywords = e.target.value;
        dispatch(searchCategory({keyword:keywords}));
  }

  const handlePrice = (e) => {
        const keywords = e.target.value;
        setIsRange(keywords);
        dispatch(searchPrice({keyword:keywords}));
  }

  return (
    <form
      className='bg-white rounded-md px-2 py-2 dark:bg-slate-900'
    >
          <div className='flex flex-col'>
              <label htmlFor='search' className=' text-lg text-slate-900 dark:text-slate-50 font-medium italic'>Search:</label>
              <input 
                  type='text' 
                  className='form-input px-3 py-2 rounded-md placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-sky-600
                              focus:border-transparent mt-1 border-indigo-600 text-slate-900 dark:bg-slate-900 dark:text-white' 
                  placeholder='Search here...'
                  id='search'
                  onChange={handleWords}
              />
          </div>
          <div className='flex flex-col mt-3'>
              <label htmlFor='category' className='text-lg text-slate-900 dark:text-slate-50 font-medium italic'>Category:</label>
              <select 
                  className='form-select rounded-md border-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 focus:border-transparent mt-1
                             text-indigo-800 dark:bg-slate-900 dark:text-white'
                  id='category'
                  onChange={handleCategory}
              >
                    <option value="">Please choose...</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
              </select>
          </div>
          <div className='flex flex-col mt-3'>
              <label htmlFor='price' className='text-lg text-slate-900 dark:text-slate-50 font-medium italic'>Price:</label>
              <input
                  id='price'
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-600 mt-3'
                  type='range'
                  min={0}
                  max={1000}
                  onChange={handlePrice}
              />
              <p className='text-base text-slate-900 dark:text-slate-50 font-normal italic mt-2'>RM {isRange}.00</p>
          </div>
    </form>
  )
}

export default FilterBar