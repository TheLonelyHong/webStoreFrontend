import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Loader = () => {
        return (
            <div role="status">
                <svg aria-hidden="true" className=" w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600 dark:fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>            
        );
}

export const Star = ({value}) => {
        return (
            <div className="flex items-center">
                    {
                        [0,0,0,0,0].slice(0 , value).map((item , index) => (
                            <svg key={index} aria-hidden="true" className="w-5 h-5 text-indigo-500 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>First star</title>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        ))
                    }
            </div>
        )
}

export const Breadcrum = ({navigation}) => {
        return(
            <div className='max-w-lg mx-auto py-20 px-2 bg-white dark:bg-slate-900'>
                    <nav className='flex'>
                            <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                                    {
                                        navigation.map((item , index) => (
                                                <li 
                                                   key={item.name}
                                                   className='inline-flex items-center'
                                                >
                                                    <NavLink
                                                        to={item.href}
                                                        className="inline-flex items-center text-xl font-medium text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-gray-500 capitalize"
                                                    >
                                                            {item.name}
                                                            {
                                                                index === item.index ? 
                                                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                                                    </svg>                                                                
                                                                : null
                                                            }
                                                    </NavLink>
                                                </li>
                                        ))
                                    }
                            </ol>
                    </nav>
            </div>
        );
}

export const showMsg = (TYPE , MSG) => {
            switch(TYPE){
                    case 'SUCCESS':
                            toast.success(MSG , {
                                    position:"bottom-right",
                                    autoClose:2500,
                                    theme:"light"
                            })
                            break;
                    case 'ERROR':
                            toast.error(MSG , {
                                position:"bottom-right",
                                autoClose:2500,
                                theme:"light"
                            });
                            break;
                    default:
                        return false;
            }
}
