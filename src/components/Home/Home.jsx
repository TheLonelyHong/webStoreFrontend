import React from 'react';
import Header from './Header';
import TopProducts from './TopProducts';
import Service from './Service';
import Reviews from './Reviews';

const Home = () => {
  return (
    <div>
        <Header/>
        <TopProducts/>
        <Service/>
        <Reviews/>
    </div>
  )
}

export default Home