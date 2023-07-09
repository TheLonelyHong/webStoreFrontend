import React from 'react';
import { AiOutlineMinus , AiOutlinePlus } from 'react-icons/ai';
import { addOrReduce } from '../../redux/Slice/cartSlice';
import { useDispatch } from 'react-redux';
import { calculateTotal } from '../../redux/Slice/cartSlice';

const Buttons = ({quantity , itemId}) => {

    const dispatch = useDispatch();

    const addQuantity = (id , type) => {
            dispatch(addOrReduce({id , type}));
            dispatch(calculateTotal());
    }

    const reduceQuantity = (id , type) => {
            dispatch(addOrReduce({id , type}));
            dispatch(calculateTotal());
    }

  return (
    <div className='flex flex-col justify-center items-center gap-y-5'>
                <button
                    type='button'
                    className='bg-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-900 text-slate-900 dark:text-slate-50 py-3 px-3
                               dark:focus:ring-slate-50'
                    onClick={() => reduceQuantity(itemId , "DEC")}
                >
                    <AiOutlineMinus
                        className='h-7 w-7'
                    />
                </button>
                <span className='text-2xl text-slate-900 dark:text-slate-50 font-medium'>{quantity}</span>
                <button
                    type='button'
                    className='bg-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-900 text-slate-900 dark:text-slate-50 py-3 px-3
                             dark:focus:ring-slate-50'
                    onClick={() => addQuantity(itemId , "ADD")}
                >
                    <AiOutlinePlus
                        className='h-7 w-7'
                    />
                </button>
    </div>
  )
}

export default Buttons