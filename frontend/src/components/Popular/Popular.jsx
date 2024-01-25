import React, { useEffect, useState } from 'react'
import './popular.css'
import { Items } from '../Items/Items'

export const Popular = () => {
  const [data_product,setdataproduct]=useState([]);
  useEffect(()=>{
    fetch('https://karthiks-sos.onrender.com/popular')
    .then((res)=>{
      let response = res.json();
      return response;
    }).then((data)=>{
      setdataproduct(data);
    })
  },[])
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="pop-item">
            {
                data_product.map((items,i)=>{
                    return<Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}></Items>

                })
            }

        </div>

    </div>
  )
}
