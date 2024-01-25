import React, { useEffect, useState } from 'react'
import './newcollection.css'
import { Items } from '../Items/Items'

export const Newcollection = () => {
  const [newcollection,setnewcollection]=useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((res)=>{
      let response = res.json()
      return response;
    }).then((data)=>{
      setnewcollection(data);
    })
  },[])
  return (
    <div className='newcollection'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="new-item">
            {
                newcollection.map((items,i)=>{
                    return<Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}></Items>

                })
            }

        </div>

    </div>
  )
}
