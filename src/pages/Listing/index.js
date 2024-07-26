import React from 'react'
import Sidebar from '../../components/Sidebar'

const Listing = () => {
  return (
    <>
    <section className="product_listing_page">
        <div className="container d-flex">
            <div className="productListing d-flex">
              <Sidebar />
            </div>
            <div className="content_right">
                Content rights
            </div>
        </div>
    </section>
    </>
  )
}

export default Listing