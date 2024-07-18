import React from 'react'
import HomeBanner from "../../components/HomeBanner"
import Button from '@mui/material/Button';
import { HiArrowRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';


const Home = () => {
 
  return (

   <>
   <HomeBanner />
  
    <div className="homeProducts">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="banner">
              <img src="images/banner1.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-9 productRow">
            <div className="d-flex align-items-center">
              <div className="info w-100 mb-0">
                <h4 className='mb-0 hd'>BEST SELLERS</h4>
                <p className='text_small'>Do not miss the current offers until the end of March.
                  </p>
              </div>
               <Button className='viewAllBtn'>View All <span> <HiArrowRight  /></span></Button>

            </div>

          
        <div className="product_row w-100 mt-4">
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="item productItem">
              <div className="imgWrapper">
                <img src="images/camera.jpeg" alt="product" className='w-100' />
              </div>
              <div className="info">
                  <h4>All Natural Italian-Style Chicken Meatballs</h4>
                  <div className="instock">
                      In Stock
              </div>
                  <div className="rating_box">
                  <Rating  className="" size='small' name="read-only" value={5} readOnly />
                  </div>
           

                  <div className="d-flex">
                    <span className="oldprice">$20.00</span>
                    <span className="netprice text-danger">$14.00</span>
                  </div>
                  </div>
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <div className="item productItem">
              <div className="imgWrapper">
                <img src="images/veg.jpeg" alt="product" className='w-100' />
              </div>
              <div className="info">
              <h4>All Natural Italian-Style Chicken Meatballs</h4>
                  <span>In Stock</span>

                  <div className="rating_box">
                  <Rating  className="" size='small' name="read-only" value={5} readOnly />
                  </div>

                   <div className="d-flex">
                    <span className="oldprice">$20.00</span>
                    <span className="netprice text-danger">$14.00</span>
                  </div>
                  </div>
                  
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="item productItem">
              <div className="imgWrapper">
                <img src="images/laptop2.webp" alt="product" className='w-100' />
              </div>
              <div className="info">
              <h4>All Natural Italian-Style Chicken Meatballs</h4>
                  <span>In Stock</span>
                  
                  <div className="rating_box">
                  <Rating  className="" size='small' name="read-only" value={5} readOnly />
                  </div>

                   <div className="d-flex">
                    <span className="oldprice">$20.00</span>
                    <span className="netprice text-danger">$14.00</span>
                  </div>
                  </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="item productItem">
              <div className="imgWrapper">
                <img src="images/mac.jpeg" alt="product" className='w-100' />
              </div>
              <div className="info">
              <h4>All Natural Italian-Style Chicken Meatballs</h4>
                  <span>In Stock</span>
                 
                  <div className="rating_box">
                  <Rating  className="" size='small' name="read-only" value={5} readOnly />
                  </div>

                   <div className="d-flex">
                    <span className="oldprice">$20.00</span>
                    <span className="netprice text-danger">$14.00</span>
                  </div>
                  </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="item productItem">
              <div className="imgWrapper">
                <img src="images/shoes.webp" alt="product" className='w-100' />
              </div>
              <div className="info">
              <h4>All Natural Italian-Style Chicken Meatballs</h4>
                  <span>In Stock</span>
                  <div className="rating_box">
                  <Rating  className="" size='small' name="read-only" value={5} readOnly />
                  </div>

                   <div className="d-flex">
                    <span className="oldprice">$20.00</span>
                    <span className="netprice text-danger">$14.00</span>
                  </div>
                  </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="item productItem">
              <div className="imgWrapper">
                <img src="images/laptop3.jpeg" alt="product" className='w-100' />
              </div>
              <div className="info">
              <h4>All Natural Italian-Style Chicken Meatballs</h4>
                  <span>In Stock</span>
                  <div className="rating_box">
                  <Rating  className="" size='small' name="read-only" value={5} readOnly />
                  </div>

                   <div className="d-flex">
                    <span className="oldprice">$20.00</span>
                    <span className="netprice text-danger">$14.00</span>
                  </div>
                  </div>
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <div className="item productItem">
              <div className="imgWrapper">
                <img src="images/wojeans.jpeg" alt="product" className='w-100' />
              </div>
              <div className="info">
              <h4>All Natural Italian-Style Chicken Meatballs</h4>
             
                  
                  <div className="rating_box">
                  <Rating  className="" size='small' name="read-only" value={5} readOnly />
                  </div>
                   <div className="d-flex">
                    <span className="oldprice">$20.00</span>
                    <span className="netprice text-danger">$14.00</span>
                  </div>


                  </div>
          </div>

        </SwiperSlide>




       
      </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   
   </>
  )
}

export default Home