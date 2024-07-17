import { Link } from "react-router-dom"
import Logo from "../../assests/images/logo.png"
// import countryDropdown from "../counryDropdown"
import Button from "@mui/material/Button";
import React, { useContext } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import CountryDropdown from "../counryDropdown";
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoBag } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { myContext } from "../../App";

const Header = () => {
  const context = useContext(myContext);
  return (
    <div className="header_wrapper">
      <div className="top_strip bg_blue">
        <div className="container">
          <p className='mb-0 mt-0 text-center'>Due to the COVID 19 epidemic, orders may be processed with a slight delay</p>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <div className="row">
          <div className="logoWrapper col-sm-2 d-flex align-content-censter ">
              <Link to={'/'}><img  src={Logo} alt="Logo"/> </Link>
          </div>

          <div className="col-sm-10 d-flex align-items-center part2">

              {
                context.countrylist.length !==0 && 
                <CountryDropdown />
              }

         {/* HEADER SEARCH start Here */}

         <SearchBox />


          {/* HEADER SEARCH End Here */}

          <div className="part3 d-flex align-items-center ml-auto">
            <Button className="circle mr-3"><FiUser /></Button>
           <div className="ml-auto cartTab d-flex align-items-center">
            <span className="price">$3.29</span>
           <div className="position-relative ml-2">
           <Button className="circle ml-2"><IoBagOutline /></Button>
           
           <span className="count d-flex align-item-center justify-content-center">1</span>
           </div>
           </div>
          </div>
                
          </div>
          </div>
        </div>
      </header>

      <Navigation />
    </div>
  )
}

export default Header