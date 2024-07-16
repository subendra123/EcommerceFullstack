import { Link } from "react-router-dom"
import Logo from "../../assests/images/logo.png"
// import countryDropdown from "../counryDropdown"
import Button from "@mui/material/Button";
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import CountryDropdown from "../counryDropdown";

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
         
                
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header