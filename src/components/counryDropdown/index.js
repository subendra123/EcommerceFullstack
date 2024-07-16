import React from 'react'
import Button from "@mui/material/Button";

import { IoIosArrowDown } from "react-icons/io";

const CountryDropdown = () => {
  return (
    <>
     <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">India</span>
        </div>
        <span className="ml-auto"><IoIosArrowDown /></span>
      </Button>
    </>
  )
}

export default CountryDropdown