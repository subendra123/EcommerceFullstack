import React from 'react'
import Slider from "react-slick";
const HomeBanner = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
  };

  return (
    <>
    <div className="homeBanner_section">
   
   <Slider {...settings}>
   <div className=''>
     <img src="images/a.jpg" alt="Banner" className='' width="100%" height="50%"  />
     </div>

     <div className=''>
     <img src="images/b.jpg" alt="Banner" className='' width="100%" height="50%"  />
     </div>
     <div className=''>
     <img src="images/3.jpg" alt="Banner" className='' width="100%" height="50%"  />
     </div>
     <div className=''>
     <img src="images/4.jpg" alt="Banner" className='' width="100%" height="50%"  />
     </div>
     <div className=''>
     <img src="images/5.jpg" alt="Banner" className='' width="100%" height="50%"  />
     </div>
     <div className=''>
     <img src="images/6.jpg" alt="Banner" className='' width="100%" height="50%"  />
     </div>
     

       </Slider>
   </div>
    </>
  )
}

export default HomeBanner