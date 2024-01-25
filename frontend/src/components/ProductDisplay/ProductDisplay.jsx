import React, { useContext } from 'react'
import stars from '../Assests/star_icon.png'
import stardull from '../Assests/star_dull_icon.png'
import './projectdisplay.css'
import { ShopContext } from '../../Context/Shopcontext'
export const ProductDisplay = (props) => {
    const {products} =props
    const{ addToCart }= useContext(ShopContext);
  return (
    <div className='outer-display'>
        <div className="reviewprblm">
        <div className="displaycontainer">
        <div className="side-container1">
        <div className="side-display">
        <img src={products.image} alt="" />
        <img src={products.image} alt="" />
        <img src={products.image} alt="" />
        <img src={products.image} alt="" />
        </div>
        <div className="main-image">
            <img src={products.image} alt="" />
        </div>
        </div>
        <div className="sidecontainer2">
            <div className="column">
            <h1>{products.name}</h1>
            <div className="star-container">
            <div className="stars">
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stardull} alt="" />
            </div>
            <div>
            <p>(122)</p>
            </div>
            </div>
            </div>
            <div className="pricedisplay">
                <div className="olderprice">${products.old_price}</div>
                <div className="newerprice">${products.new_price}</div>
            </div>
            <div className="sizes">
                <h2>Select Size</h2>
                <div className="listing">
                    <div className='ss'>S</div>
                    <div className='ss'>M</div>
                    <div className='ss'>L</div>
                    <div className='ss'>XL</div>
                    <div className='ss'>XXL</div>
                </div>
            </div>
            <div className="addtocart">
                <button onClick={()=>{addToCart(products.id)}}>ADD TO CART</button>
                <div className="categorytags">
                    <p><span>Category</span>:Women,T-shirt Top </p>
                    <p><span>Tags</span>: Modern,Latest</p>
                </div>
            </div>
        </div>
        </div>
        <div className="cont">
        <div className="descriptionreview-container">
            <div className="first-container">
                <div className="description">
                    <p>description</p>
                </div>
                <div className='reviews'>
                    <p>reviews</p>
                </div>

            </div>
            <div className="second-container">
                <p>Lorem ipsum dolor, sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat consectetur nobis ab cum recusandae minima culpa eligendi architecto quam placeat, consequatur illum voluptas nemo, sint porro impedit error, doloremque praesentium. adipisicing elit. Non reprehenderit vitae ea dolore. Voluptas velit ipsum ut tempore ullam assumenda incidunt, ipsam necessitatibus porro delectus neque enim, nemo nulla error.</p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}
