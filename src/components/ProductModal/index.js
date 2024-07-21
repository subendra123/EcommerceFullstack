import React, { useRef } from 'react'
import Dialog from '@mui/material/Dialog';
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import { Rating } from '@mui/material';
import Slider from 'react-slick';
import { Settings } from '@mui/icons-material';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';

const ProductModal = (props) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef()

  var Settings2 = {
    dots:false,
    Infinite: false,
    speed:700,
    slideToShow: 1,
    slideToScroll: 1,
    fade:false,
    arrows:false,

  };

  return (
  <>
  <Dialog className='productModal' open={true}  onClose={ () => props.closeProductModal()} >
       
        <Button className='close_'><MdClose /></Button>
        <h4  className='mb-2'>All Natural Italian-Style Chicken Meatballs</h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands</span>
            <span className="ml-2"><b>Welch</b></span>
        </div>


        <Rating name='read-only' value={5} size='small' readOnly />
        
        
            
            </div>

            <hr />
       
       <div className="row mt-2 productDetailsModal">
          <div className="col-md-5">

            <Slider {...Settings2} className='zoomSliderBig' ref={zoomSliderBig}>
              <div className="item">
                <InnerImageZoom 
                   zoomType='hover'
                   zoomScale={1}
                   src='images/camera.jpeg'

                
                />
              </div>

            </Slider>

          </div>

          <div className="col-md-7">
            
          </div>
       </div>

        </Dialog>
  
  </>
  )
}

export default ProductModal