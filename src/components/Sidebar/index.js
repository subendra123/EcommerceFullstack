import React, {useState} from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Sidebar = () => {
    const [value, setValue] = useState([100, 60000]);

  return (
   <>
   <div className="sidebar">
   <div className="filterBox">
        <h6>Product Category</h6>

        <div className="scroll">
            <ul>
                <li> <FormControlLabel control={<Checkbox  />} label="Men" />    </li>
                <li> <FormControlLabel control={<Checkbox  />} label="Women" />    </li>
                <li> <FormControlLabel control={<Checkbox  />} label="Beauty" />    </li>
                <li> <FormControlLabel control={<Checkbox  />} label="Kids" />    </li>
                <li> <FormControlLabel control={<Checkbox  />} label="Electronics" />    </li>
            </ul>
            
        </div>

   </div>
   <div className="filterBox filter_price">
    <h6>Filter by price</h6>

    <RangeSlider className="range_slider_styles"  value={value} onInput ={setValue} min ={100} max ={60000} step={5}  />
    <div className=" pt-2 pb-2 priceRange">
        <span> <strong className='text-success'> Rs: {value[0]}</strong></span>
        <span className='ml-auto'> <strong className='text-success'> Rs: {value[1]}</strong></span>
        
    </div>
   </div>

   
   </div>
   </>
  )
}

export default Sidebar