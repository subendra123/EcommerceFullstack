import React from 'react'
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiMobile1 } from "react-icons/ci";

const Navigation = () => {
  return (
    <>
    <nav>
        <div className="container">
            <div className="row">
                <div className="col-sm-3 navpart1">
                   <div className="catWrapper">
                   <Button className='allCatTab align-items-center'>
                        <span className="icon1 mr-2"><IoIosMenu /></span>
                        <span className='text'>All Category</span>
                        <span className='icon2 ml-2'><FaAngleDown /></span>
                    </Button>
                    <div className="sidebarNav shadow">
                        <ul>
                        <li className="sidebar_list_Link"><Link className='list_link ' to="/"> <span className='px-2'><CiMobile1  /></span>Fashion</Link></li>
                        <li className="sidebar_list_Link"><Link className='list_link' to="/"><span className='px-2'><CiMobile1  /></span>Electronics</Link></li>
                        <li className="sidebar_list_Link"><Link className='list_link' to="/"><span className='px-2'><CiMobile1  /></span>Bakery</Link></li>
                        <li className="sidebar_list_Link"><Link className='list_link' to="/"><span className='px-2'><CiMobile1  /></span>Electronics</Link></li>
                        <li className="sidebar_list_Link"><Link className='list_link' to="/"> <span className='px-2'><CiMobile1  /></span>Bakery</Link></li>
                        <li className="sidebar_list_Link"><Link className='list_link' to="/"><span className='px-2'><CiMobile1  /></span>Electronics</Link></li>
                        <li className="sidebar_list_Link"><Link className='list_link' to="/"> <span className='px-2'><CiMobile1  /></span>Bakery</Link></li>
                        <li className="sidebar_list_Link"><Link className='list_link' to="/"><span className='px-2'><CiMobile1  /></span>Electronics</Link></li>
                        <li className="sidebar_list_Link"><Link className='list_link' to="/"><span className='px-2'><CiMobile1  /></span>Bakery</Link></li>
                        
                        <li className="sidebar_list_Link"><Link className='list_link' to="/"><span className='px-2'><CiMobile1  /></span>Bakery</Link></li>
                        </ul>
                    </div>

                   </div> 
                </div>

                <div className="col-sm-9 navpart2 d-flex align-item-center">
                    <ul className="list listinline w-100">
                        <li className="list_inline_item"><Link className='list_link' to="/">Home</Link></li>
                        <li className="list_inline_item"><Link className='list_link' to="/">Fashion</Link></li>
                        <li className="list_inline_item"><Link className='list_link' to="/">Electronics</Link></li>
                        <li className="list_inline_item"><Link className='list_link' to="/">Bakery</Link></li>
                        <li className="list_inline_item"><Link className='list_link' to="/">Grocessory</Link></li>
                        <li className="list_inline_item"><Link className='list_link' to="/">Blog</Link></li>
                        <li className="list_inline_item"><Link className='list_link' to="/">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navigation