import React from 'react'
import HomeBanner from "../../components/HomeBanner"
import Button from '@mui/material/Button';
import { HiArrowRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import ProductItem from '../../components/productItems';
import HomeCat from '../../components/HomeCat';

import NewsLetter from '../../components/NewsLetter';



const Home = () => {
 
  return (

   <>
   <HomeBanner />

   <HomeCat />
  <ProductItem />
  <NewsLetter />

  
    
   
   </>
  )
}

export default Home