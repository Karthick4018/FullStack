import { useEffect, useState } from 'react'
import './listproduct.css'
import removeicon from '../../assets/cart_cross_icon.png'

const Listproduct = () => {
  const[allproducts,setallproducts]=useState([])
  const fetchProduct= async ()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>{
      const response =res.json()
      return response
    })
    .then((data)=>{
      setallproducts(data);
    })
  }
  useEffect(()=>{
    fetchProduct()
  },[])
  const removeproduct= async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-type':'appication/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchProduct();
  }
  return (
    <div className='listProducts'>
      <div className="items">
        <h3>Product</h3>
        <h3>Title</h3>
        <h3>Old Price</h3>
        <h3>New Price</h3>
        <h3>Category</h3>
        <h3>Remove</h3>
      </div>
      <hr />
      {allproducts.map((product,key)=>{

        return <div key={key} className='container'><div  className="mappingproducts">
                      <div><img className='images' src={product.image} alt="" /></div>
                     <div><p>{product.name}</p></div>
                     <div><p>${product.old_price}</p></div>
                      <div><p>{product.new_price}</p></div>
                      <div><p>{product.category}</p></div>
                      <div><img id='in' onClick={()=>{removeproduct(product.id)}} src={removeicon} alt="" /></div>
               </div></div>
      })}

    </div>
  )
}

export default Listproduct