import React, { useContext } from 'react'
import './cartitems.css'
import { ShopContext } from '../../Context/Shopcontext'
import remove from '../Assests/cart_cross_icon.png'

export const CartItems = () => {
    const{all_product,getTotalamount,cartItems,removeCartItems}=useContext(ShopContext);
  return (
    <div className="carts2">
    <div className='cartings'>
        <div className="outer-cart">
        <hr />
        <div className="cart-details">
            <p>Product</p>            
            <p>Title</p>            
            <p>price</p>            
            <p>Quantity</p>            
            <p>Total</p>
            <p>Remove</p>
        </div>
        {all_product.map((items,key)=>{
            if(cartItems[items.id]>0){
                return <div key={key} className='cart'>
                    <div className='itemgrid'><img id='ii' src={items.image} alt="" /></div>
                    <div id='uni' className='itemgrid'><p>{items.name}</p></div>
                    <div className='itemgrid'><p>${items.new_price}</p></div>
                    <div className="itemgrid"><button>{cartItems[items.id]}</button></div>
                    <div className="itemgrid"><p>${items.new_price*cartItems[items.id]}</p></div>
                    <div className="itemgrid"><img src={remove} onClick={()=>{removeCartItems(items.id)}} alt="" /></div>
                    </div>
            }
            else{
                return null;
            }
        })}
        <hr />
        </div>
    </div>
    <div className="cart1">
        <div className="carthead2">
        <div className="cartheading">
            <h1>Cart Totals</h1>
        </div>
        <div className="cartsidehead">
            <div className="griding">
                <p>Subtotal</p>
                <p>${getTotalamount()}</p>
            </div>
            <hr />
            <div className="griding">
                <p>Shipping</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="griding">
                <p>Total</p>
                <p>${getTotalamount()}</p>
            </div>
            <hr />
        </div>
        <div className="checkout">
            <button>PROCEED TO CHECKOUT</button>
        </div>
        </div>
        <div className="promo">
            <div className="pr">
            <p>if you have promo code Enter it here</p>
            </div>
            <div className="pr2">
            <input type="text" placeholder='Promo code' />
            <button>Submit</button>
            </div>
        </div>

    </div>
    </div>
  )
}
