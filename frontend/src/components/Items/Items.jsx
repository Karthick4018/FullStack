import React from 'react'
import './items.css'
import { Link } from 'react-router-dom'
export const Items = (props) => {
  return (
    <div className='items'>
      <div className="image-name">
            <div className="image">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="img" /></Link>
            </div>
            <div className="item-details">
            <h6>{props.name}</h6>
            </div>
        </div>
        <div className="prices">
        <div className="new-price">
           <p>new price</p> ${props.new_price}
        </div>
        <div className="old-price">
            <p>old price</p>${props.old_price}
        </div>
        </div>
    </div>
  )
}
