import React from 'react';
import Slideer from './Slideer';

const TopProducts = () => {
  return (
    <div className='py-24 lg:py-32 bg-white dark:bg-slate-900' id='topProducts'>
            <h1 className='text-center text-5xl tracking-tight font-semibold underline text-slate-900 dark:text-slate-50'>Top products</h1>
            <div className='w-full bg-slate-50 dark:bg-slate-800'>
                    <Slideer/>
            </div>
    </div>
  )
}

export default TopProducts