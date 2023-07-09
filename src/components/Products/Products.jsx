import React from 'react';
import { Breadcrum } from '../../utils/tools';
import FilterBar from './FilterBar';
import ProductBar from './ProductBar';

const navigation = [
    {name:"Home" , href:"/" , index:0},
    {name:"Products" , href:"/products" , index:2}
];

const Products = () => {
  return (
    <div className='bg-white dark:bg-slate-900 min-h-[80vh]'>
      <Breadcrum navigation={navigation}/>
      <div
          className='max-w-full sm:max-w-4xl 2xl:max-w-7xl mx-auto flex flex-col lg:flex-row gap-x-3 gap-y-3'
      >
          <div className='basis-full lg:basis-1/4'>
                <FilterBar/>
          </div>
          <div className='basis-full lg:basis-3/4'>
                <ProductBar/>
          </div>
      </div>
    </div>
  )
}

export default Products