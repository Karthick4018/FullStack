import React from 'react'
import data_product from '../Assests/data'
import './related.css'
import { Items } from '../Items/Items'
export const Relatedproducts = () => {
  return (
    <div>
        <div className='relatedproducts'>
        <h1>RELATED PRODUCTS</h1>
        <hr/>
        <div className="related-items">
            {
                data_product.map((items,i)=>{
                    return<Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}></Items>

                })
            }

        </div>

    </div>
    </div>
  )
}
