import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProduct } from '../../redux/Thunk/productThunk';
import { Loader , Star } from '../../utils/tools';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { searchSort } from '../../redux/Slice/productSlice';


const ProductBar = () => {

      const dispatch = useDispatch();
      const product = useSelector(state => state.product);

      const lowerCase = (str) => {
            return str.toLowerCase().split(" ").join("");
      }

      const handleSort = (e) => {
                  const keywords = e.target.value;
                  dispatch(searchSort({keyword:keywords}));
      }

      useEffect(() => {
                  dispatch(fetchAllProduct());
      } , []);


  return (
    <div>
            <div className='flex'>
                  <div className='basis-3/4 px-4 flex items-center'>
                        <div
                          className='border-2 border-slate-200 dark:border-slate-600 w-full rounded-full'
                        />
                  </div>
                  <div className='basis-1/4 flex items-center'>
                        <form>
                              <select 
                                  className='form-select rounded-md border-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 
                                             focus:border-transparent text-indigo-800 dark:bg-slate-900 dark:text-white'
                                  onChange={handleSort}
                              >
                                    <option value="">Sort...</option>
                                    <option value="price-(lth)">Price Low to High</option>
                                    <option value="price-(htl)">Price High to Low</option>
                                    <option value="name-z">Name A - Z</option>
                                    <option value="name-a">Name Z - A</option>
                              </select>
                        </form>
                  </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-3 py-3 px-3 sm:px-0'>
                        {
                              product.loading ?
                                    <div className='flex justify-center items-center py-3 px-3'>
                                                <Loader/>
                                    </div> 
                              : 
                                    product.allProduct.length !== 0 ? 
                                    product.allProduct.map((item) => (
                                                <div 
                                                   key={item.title}
                                                   className='border-2 border-slate-100 dark:border-slate-600 rounded-sm'
                                                >
                                                      <div className='w-full h-80 flex justify-center bg-white dark:bg-slate-900'>
                                                            <LazyLoadImage
                                                                  src={`${item.image}`}
                                                                  alt=''
                                                                  effect='blur'
                                                                  className='w-full h-80 object-contain'
                                                                  draggable={false}
                                                            />
                                                      </div>
                                                      <div className='px-5 py-5 bg-white dark:bg-slate-900'>
                                                            <div className='flex justify-between items-center'>
                                                                  <h1 className='text-lg text-slate-900 dark:text-slate-50 font-semibold'>{item.title}</h1>
                                                                  {
                                                                        item.isNew ? 
                                                                              <span className='badge-pink'>New</span>
                                                                        : null
                                                                  }
                                                            </div>
                                                            <h1 className='py-3 text-base dark:text-white'>
                                                                  RM <del className='text-slate-400 dark:text-slate-500'>{item.oldPrice}</del> {"->"} <span className='font-semibold'>{item.price}</span>
                                                            </h1>
                                                            <h1 className='py-3 text-base text-slate-900 dark:text-white font-medium capitalize'>
                                                                  {item.category}
                                                            </h1>
                                                            <div className=' -ml-1'>
                                                                  <Star value={item.rating}/>
                                                            </div>
                                                            <div className='py-3'>
                                                                  <NavLink
                                                                     to={`/single/${lowerCase(item.title)}`}
                                                                     className="text-slate-900 dark:text-slate-50 font-medium text-lg underline hover:text-fuchsia-600"
                                                                  >
                                                                        View {"->"}
                                                                  </NavLink>
                                                            </div>
                                                      </div>
                                                </div>
                                    )) :
                                    <h1 className='text-slate-900 dark:text-slate-50 text-lg font-medium'>Oops , no items founds</h1>
                        }
            </div>
    </div>
  )
}

export default ProductBar