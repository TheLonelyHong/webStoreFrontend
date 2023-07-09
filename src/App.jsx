import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import SinglePage from './components/SinglePage/SinglePage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-toastify/dist/ReactToastify.css';

const AppLayout = () => {
    return(
        <>
          <Navbar/>
          <Outlet/>
          <Footer/>
          <ToastContainer/>
        </>
    );
}

const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<AppLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/single/:id' element={<SinglePage/>}/>
              <Route path='*' element={<ErrorPage/>}/>
          </Route>
        )
);

function App() {

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
