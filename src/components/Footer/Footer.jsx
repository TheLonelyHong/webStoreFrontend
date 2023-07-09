import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillFacebook , AiFillYoutube , AiFillTwitterSquare , AiFillLinkedin} from 'react-icons/ai';


//https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600

const icons = [
        {
            name:"Facebook",
            icon:<AiFillFacebook className='h-6 w-6 text-blue-600 dark:text-blue-400'/>
        },
        {
            name:"Youtube",
            icon:<AiFillYoutube className='h-6 w-6 text-red-600 dark:text-red-400'/>
        },
        {
            name:"Twitter",
            icon:<AiFillTwitterSquare className='h-6 w-6 text-sky-500 dark:text-sky-400'/>
        },
        {
            name:"LinkedIn",
            icon:<AiFillLinkedin className='h-6 w-6 text-blue-800 dark:text-blue-600'/>
        }
];

const Footer = () => {
  return (
    <div className='bg-slate-50 dark:bg-slate-800 px-16 py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-x-5 gap-y-5'>
                        <div>
                                <LazyLoadImage
                                        src='https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600'
                                        effect='blur'
                                        className='w-16 h-16'
                                />
                                <div className='mt-5'>
                                        <h1 className='text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight underline'>Company</h1>
                                        <h2 className='mt-3 text-lg lg:text-xl font-medium text-slate-900 dark:text-slate-50'>
                                                Name:<br/>
                                                <span className='text-base lg:text-xl font-normal text-slate-900 dark:text-slate-50'>
                                                        The Web Store
                                                </span>
                                        </h2>
                                        <h2 className='mt-3 text-lg lg:text-xl font-medium text-slate-900 dark:text-slate-50'>
                                                Address:<br/>
                                                <span className='text-base lg:text-xl font-normal text-slate-900 dark:text-slate-50'>
                                                        No:3 Jalan Selayang 1/4L Bandar Ikan Emas 58100 Selangor
                                                </span>
                                        </h2>
                                </div>
                        </div>
                        <div>
                                <h1 className='text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight underline'>Social Media</h1>
                                <h2 className='mt-3 text-lg lg:text-xl font-medium text-slate-900 dark:text-slate-50'>Join Us:</h2>
                                <div className='flex gap-x-2 mt-3 items-center'>
                                        {
                                            icons.map((item) => (
                                                <div key={item.name}>
                                                        {item.icon}
                                                </div>
                                            ))
                                        }
                                </div>
                        </div>
                        <div>
                                <h1 className='text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight underline'>Contact</h1>
                                <h2 className='mt-3 text-lg lg:text-xl font-medium text-slate-900 dark:text-slate-50'>
                                                Company phone:<br/>
                                                <span className='text-base lg:text-xl font-normal text-slate-900 dark:text-slate-50'>
                                                        +603-91719901
                                                </span>
                                </h2>
                                <h2 className='mt-3 text-lg lg:text-xl font-medium text-slate-900 dark:text-slate-50'>
                                                Phone:<br/>
                                                <span className='text-base lg:text-xl font-normal text-slate-900 dark:text-slate-50'>
                                                        +60-129118009 {"Mr. John Doe"}
                                                </span>
                                </h2>
                        </div>
                        <div>
                                <h1 className='text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight underline'>Operation hours</h1>       
                                <h2 className='mt-3 text-lg lg:text-xl font-medium text-slate-900 dark:text-slate-50'>
                                                Weekdays:<br/>
                                                <span className='text-base lg:text-xl font-normal text-slate-900 dark:text-slate-50'>
                                                        9am ~ 5pm
                                                </span>
                                </h2>
                                <h2 className='mt-3 text-lg lg:text-xl font-medium text-slate-900 dark:text-slate-50'>
                                                Weekend:<br/>
                                                <span className='text-base lg:text-xl font-normal text-slate-900 dark:text-slate-50'>
                                                        Saturday:11am ~ 4pm
                                                </span><br/>
                                                <span className='text-base lg:text-xl font-normal text-slate-900 dark:text-slate-50'>
                                                        Closed on Sunday
                                                </span>
                                </h2>
                        </div>
            </div>
    </div>
  )
}

export default Footer