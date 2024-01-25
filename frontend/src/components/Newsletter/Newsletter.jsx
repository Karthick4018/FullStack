import React from 'react'
import './newsletter.css'

export const Newsletter = () => {
  return (
    <div className='outer-div'>
        <div className="container-newsletter">
            <div className="bigheading">
                <h1>Get Exclusive Offers On Your Email</h1>
                <p>Subscribe to our newsletter and stay updated</p>
                <div className="inputting">
                <input type="text" placeholder='Your Email id' />
                <button>subscribe</button>
            </div>
            </div>
        </div>

    </div>
  )
}
