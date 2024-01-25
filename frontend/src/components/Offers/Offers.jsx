import React from 'react'
import exclusive from '../Assests/exclusive_image.png'
import './offers.css'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="container">
        <div className="offersright">
            <div className="headers">
            <h1>EXCLUSIVE OFFERS</h1>
            </div>
            <div className="inners">
            <h2>CHOOSE BEST FOR YOU</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>CHECK NOW!</button>
            </div>
        </div>
            <div className="offersleft">
                <img src={exclusive}alt="eximage" />
            </div>
        </div>
    </div>
  )
}
