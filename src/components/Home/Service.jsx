import React from 'react';
import { BiSupport , BiTime } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';
import { GiBoxUnpacking } from 'react-icons/gi';
import { RiSecurePaymentFill } from 'react-icons/ri';


// good support , delivery , good packing , secure payment , punctual


const service = [
      {
        name:"Good Support",
        icon:<BiSupport className='w-10 h-10'/>,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
      },
      {
        name:"Delivery",
        icon:<TbTruckDelivery className='w-10 h-10'/>,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
      },
      {
        name:"Nice packaging",
        icon:<GiBoxUnpacking className='w-10 h-10'/>,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
      },
      {
        name:"Secure Payment",
        icon:<RiSecurePaymentFill className='w-10 h-10'/>,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
      },
      {
        name:"Punctual",
        icon:<BiTime className='w-10 h-10'/>,
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
      },
];

const Service = () => {
  return (
    <div className='relative py-32 px-0 lg:px-10 bg-white dark:bg-slate-900 z-0' id="services">
          <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                <div
                  className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] dark:from-[#334155] dark:to-[#cbd5e1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                  style={{
                      clipPath:`
                          polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)
                      `
                  }}
                />
          </div>
          <h1 className='text-slate-900 dark:text-slate-50 text-center text-5xl font-medium tracking-tight underline'>Services</h1>
          <div className='flex gap-x-8 gap-y-8 flex-wrap justify-center items-center py-14 px-14 max-w-lg sm:max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto pt-4'>
                {
                  service.map((item) => (
                        <div 
                            key={item.name}
                            className='w-full sm:w-80 lg:w-72 h-full rounded-md shadow-lg bg-white dark:bg-slate-900'
                        >
                            <div className='flex items-center p-4 text-blue-700 dark:text-blue-400 lg:justify-center'>
                                  {item.icon}
                            </div>
                            <h1 className='p-4 font-medium text-2xl tracking-tight text-fuchsia-600 dark:text-fuchsia-400 italic lg:text-center'>{item.name}</h1>
                            <div className='p-4 leading-6 text-xl tracking-tight text-slate-900 dark:text-slate-50'>
                                  {item.desc}
                            </div>
                        </div>
                  ))
                }
          </div>
          <div
              className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          >
              <div
                  className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] dark:from-[#334155] dark:to-[#cbd5e1] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
                  style={{
                      clipPath:`
                        polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)
                      `
                  }}
              />
          </div>
    </div>
  )
}

export default Service