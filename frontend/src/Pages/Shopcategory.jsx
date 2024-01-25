import React, { useContext } from 'react'
import './CSS/shopcategory.css'
import { Items } from '../components/Items/Items'
import { ShopContext } from '../Context/Shopcontext';
import dropdownarrow from '../components/Assests/dropdown_icon.png'
import { motion } from 'framer-motion';

export const Shopcategory = (props) => {
  const {all_product}= useContext(ShopContext);
  return (
    <motion.div className='outer-category' initial={{width:0}} animate={{width:'100%'}} exit={{x:window.innerWidth,transition:{duration:1}}}>
      <div className="category-image">
      <img src={props.banner} alt="" />
      </div>
      <div className="inner-category">
      <div className="index">
        <p><span>Showing 1-12</span> out of 36 products</p>
        <div className="btnarrow">
        <div className="sortbutton">
          <div>Sort by</div>
          </div>
          <div className="indeximg">
            <img src={dropdownarrow} alt="" />
          </div>
          </div>   
        </div>
           
      <div className="items-category">
        {
        
        
           all_product.map((items,i)=>{
            if(props.category===items.category){
              return <Items key={i} id={items.id} name={items.name} old_price={items.old_price} new_price={items.new_price} image={items.image}></Items>
            }
            else{
              return null;
            }
        })}

      </div>
      <div className="exploreicon">
        <div>Explore More</div>
      </div>
      </div>
    </motion.div>
  )
}
