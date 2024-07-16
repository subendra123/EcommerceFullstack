import { Link } from "react-router-dom"
import Logo from "../../assests/images/logo.png"
// import countryDropdown from "../counryDropdown"
import Button from "@mui/material/Button";
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import CountryDropdown from "../counryDropdown";
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoBag } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="top_strip bg_blue">
        <div className="container">
          <p className='mb-0 mt-0 text-center'>Due to the COVID 19 epidemic, orders may be processed with a slight delay</p>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="row">
          <div className="logoWrapper col-sm-2 d-flex align-content-censter ">
              <Link to={'/'}><img  src={Logo} alt="Logo"/> </Link>
          </div>

          <div className="col-sm-10 d-flex align-items-center part2">
            <CountryDropdown />
         {/* HEADER SEARCH start Here */}

         <div className="headerSearch ml-3 mr-3">
            <input type="text" placeholder="Search Product" />
            <Button> <IoIosSearch /> </Button>
         </div>

          {/* HEADER SEARCH End Here */}

          <div className="part3 d-flex align-items-center ml-auto">
            <Button className="circle mr-3"><FiUser /></Button>
           <div className="ml-auto cartTab d-flex align-items-center">
            <span className="price">$3.29</span>
           <div className="position-relative ml-2">
           <Button className="circle ml-2"><IoBagOutline /></Button>
           </div>
           </div>
          </div>
                
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header