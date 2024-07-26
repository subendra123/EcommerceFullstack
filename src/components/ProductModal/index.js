import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import { Rating } from "@mui/material";

import { Settings } from "@mui/icons-material";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";


const ProductModal = (props) => {
 


 
  return (
    <>
      <Dialog
        className="productModal"
        open={true}
        onClose={() => props.closeProductModal()}
      >
        <Button className="close_">
          <MdClose />
        </Button>
        <h4 className="mb-2">All Natural Italian-Style Chicken Meatballs</h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands</span>
            <span className="ml-2">
              <b>Welch</b>
            </span>
          </div>

          <Rating name="read-only" value={5} size="small" readOnly />
        </div>

        <hr />

        <div className="row">

      <div className="col-md-6 leftpart ">
         <div className="image_details">
            <img src="images/a.jpg" alt=""  className="detail_img_style"  />
            </div>
      </div>
      test
      <div className="col-md-6 bg-danger">
        
        </div>

        </div>

      </Dialog>
    </>
  );
};

export default ProductModal;
