import React, { useEffect, useState } from 'react'


import { IoIosArrowDown } from "react-icons/io";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { IoIosSearch } from "react-icons/io";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import { myContext } from "../../App";
import { useContext } from 'react'
import { drawerClasses } from '@mui/material';

const CountryDropdown = () => {

  const context = useContext(myContext);
  const[isOpenModal, setisOpenModal] = useState(false);
  const[selectedCountry, setSelectedCountry] = useState(null)

  const[countryList, setCountryList] = useState([])


  const SelectCountry = (index, country) => {
    setSelectedCountry(index)
    setisOpenModal(false);
    context.setSelectedCountry(country)
    
  }

  useEffect(() => {
    setCountryList(context.countrylist)
  }, [])

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if(keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(list);
    } else {
      setCountryList(context.countrylist);
    }

  

  }

  return (
    <>
     <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{context.selectedCountry !== "" ? context.selectedCountry.length > 10 ? context.selectedCountry?.substr(0,10)+'...' :
          context.selectedCountry : "Select Location"  }</span>
        </div>
        <span className="ml-auto"><IoIosArrowDown /></span>
      </Button>

      <Dialog open={isOpenModal} onClose={() => setisOpenModal(false)} className='locationModal'>
        <h4 className='mb-0'>Choose Your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className='close_'><MdClose   onClick={() => setisOpenModal(false)} /></Button>

        <div className="headerSearch w-100">
            <input type="text" placeholder="Search Product"    onChange={filterList}/>
            <Button> <IoIosSearch /> </Button>
         </div>

         <ul className="countryList mt-3">

          {
            countryList?.length!==0 && countryList?.map((item, index) => {
              return(
                <li key={index}><Button className={ `${selectedCountry ===index ? 'active': ''}`}  onClick={() => SelectCountry(index, item.country)}>{item.country}</Button></li>
              )
            })
          }

      
        
         </ul>
        </Dialog>

    </>
  )
}

export default CountryDropdown