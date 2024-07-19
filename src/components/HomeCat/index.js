import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';

import Button from "@mui/material/Button";
import { HiArrowRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Rating from "@mui/material/Rating";
import { TfiFullscreen } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";


const HomeCat = () => {
  return (

    <section className="homecat">
        <div className="container">
            <div className="feature_category">
                <h3>Feature Category</h3>
            </div>
        <Swiper
                slidesPerView={10}
                spaceBetween={20}
                navigation={true}
                slidesPerGroup={1}
                modules={[Navigation]}
                className="mySwiper"
              >


        <SwiperSlide>
            <div className="item text-center">
                <img src="images/mob.jpg"  alt="category image" />
                <h6>Mobile</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item text-center">
                <img src="images/mob.jpg"  alt="category image" />
                <h6>Mobile</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item text-center">
                <img src="images/mob.jpg"  alt="category image" />
                <h6>Mobile</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item text-center">
                <img src="images/mob.jpg"  alt="category image" />
                <h6>Mobile</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item text-center">
                <img src="images/mob.jpg"  alt="category image" />
                <h6>Mobile</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item text-center">
                <img src="images/mob.jpg"  alt="category image" />
                <h6>Mobile</h6>
            </div>
        </SwiperSlide>
        

        <SwiperSlide>
            <div className="item text-center">
                <img src="images/mob.jpg"  alt="category image" />
                <h6>Mobile</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item text-center">
                <img src="images/mob.jpg"  alt="category image" />
                <h6>Mobile</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item text-center">
                <img src="images/mob.jpg"  alt="category image" />
                <h6>Mobile</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item text-center">
                <img src="images/mob.jpg"  alt="category image" />
                <h6>Mobile</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item text-center">
                <img src="images/mob.jpg"  alt="category image" />
                <h6>Mobile</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item text-center">
                <img src="images/mob.jpg"  alt="category image" />
                <h6>Mobile</h6>
            </div>
        </SwiperSlide>
        
        

        </Swiper>
        </div>
    </section>
  )
}

export default HomeCat