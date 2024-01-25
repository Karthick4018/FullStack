import React from 'react'
import './bread.css'
import sidearrow from '../Assests/breadcrum_arrow.png'

export const Breadcrums = (props) => {
    const {products} =props;
    console.log(typeof products)
  return (
    <div className='bread-outer'>
        <div className="values">
            <div>HOME <img src={sidearrow} alt="ar" />SHOP <img src={sidearrow} alt="ar" />{products.category} <img src={sidearrow} alt='ar' />{products.name} </div>
        </div>
    </div>
  )
}
