import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import Button from '@mui/material/Button';

const NewsLetter = () => {
  return (
    <>
    <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
            <p className="text-white mb-1">
            $20 discount for your first order
            </p>
            <h3 className='text-white'>Join our newsletter and get...</h3>
            <p className="text-light">
            Join our email subscription now to ge  updates on <br /> promotions and coupons.

            </p>

            <form action="">
            <IoMailOutline />
            <input type="text" placeholder='Your email address' />
            <Button>Subscribe</Button>
            </form>
        </div>


        <div className="col-md-6">
          
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default NewsLetter