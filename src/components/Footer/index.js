import React from 'react'
import { GiBottleVapors } from "react-icons/gi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaShuttleVan } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="topInfo row">
                <div className="col d-flex align-items-center">
                    <span><GiBottleVapors /></span>
                    <span className='ml-2'>Everyday fresh products</span>
                </div>
                <div className="col d-flex align-items-center">
                    <span><FaShuttleVan />
                    </span>
                    <span className='ml-2'>Free delivery for order over $70</span>
                </div>
                <div className="col d-flex align-items-center">
                    <span> <RiDiscountPercentFill />
                    </span>
                    <span className='ml-2'>Daily Mega Discounts</span>
                </div>
                <div className="col d-flex align-items-center">
                    <span> <CiDollar />
                    </span>
                    <span className='ml-2'>Best price on the market</span>
                </div>

            </div>

            <div className="row mt-5 linkWrap">
                <div className="col">
                    <h5>FRUIT & VEGETABLES</h5>
                    <ul>
                        <li><Link to="/">Fresh Vegetable</Link></li>
                        <li><Link to="/">Herbs & Seasonings</Link></li>
                        <li><Link to="/">Fresh Fruits</Link></li>
                        <li><Link to="/">Cuts & Sprouts</Link></li>
                        <li><Link to="/">Exotic Fruits & Veggies</Link></li>
                        <li><Link to="/">Packaged Produce</Link></li>
                        <li><Link to="/">Party Trays</Link></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>BREAKFAST & DAIRY</h5>
                    <ul>
                        <li><Link to="/">Milk & Flavoured Milk</Link></li>
                        <li><Link to="/">Butter and Margarine</Link></li>
                        <li><Link to="/">Cheese</Link></li>
                        <li><Link to="/">Eggs Substitutes</Link></li>
                        <li><Link to="/">Honey</Link></li>
                        <li><Link to="/">Marmalades</Link></li>
                        <li><Link to="/">Sour Cream and Dips</Link></li>
                        <li><Link to="/">Yogurt</Link></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>MEAT & SEAFOOD</h5>
                    <ul>
                        <li><Link to="/">Breakfast Sausage</Link></li>
                        <li><Link to="/">Dinner Sausage</Link></li>
                        <li><Link to="/">Beef</Link></li>
                        <li><Link to="/">Chicken</Link></li>
                        <li><Link to="/">Crab and Shellfish</Link></li>
                        <li><Link to="/">Fresh Vegetable</Link></li>
                        <li><Link to="/">Farm Raised Fillets</Link></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>BEVERAGES</h5>
                    <ul>
                        <li><Link to="/">Water</Link></li>
                        <li><Link to="/">Fresh Vegetable</Link></li>
                        <li><Link to="/">Sparkling Water</Link></li>
                        <li><Link to="/">Soda & Pop</Link></li>
                        <li><Link to="/">Fresh Vegetable</Link></li>
                        <li><Link to="/">Fresh Vegetable</Link></li>
                        <li><Link to="/">Drink Boxes & Pouches</Link></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>BREADS & BAKERYS</h5>
                    <ul>
                        <li><Link to="/">Milk & Flavoured Milk</Link></li>
                        <li><Link to="/">Fresh Vegetable</Link></li>
                        <li><Link to="/">Butter and Margarine</Link></li>
                        <li><Link to="/">Fresh Vegetable</Link></li>
                        <li><Link to="/">Eggs Substitutes</Link></li>
                        
                    </ul>
                </div>
            </div>


            <div className="copyright mt-5 pt-3 ">
                <p className="mb-0 text-center">Copyright 2024. All rights reserved</p>

            </div>

        </div>
    </footer>
    
    </>
  )
}

export default Footer