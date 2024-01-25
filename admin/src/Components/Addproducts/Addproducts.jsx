import { useState } from 'react'
import'./addproduct.css'

const Addproducts = () => {
    const[image,setImage]=useState()
    const imagehandler= (e)=>{
        setImage(e.target.files[0])
    }
    const[productdetails,setproductdetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",
    })
    const changehandler=(e)=>{
        setproductdetails({...productdetails,[e.target.name]:e.target.value})
    }
    const addproducts = async()=>{
        console.log(productdetails)
        let responsedata;
        let product=productdetails;
        let formdata= new FormData();
        formdata.append('product',image);
        await fetch('http://localhost:4000/uploads',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formdata,
        }).then((res)=>res.json()).then((data)=>responsedata=data)
        if(responsedata.success){
            product.image = responsedata.image_url
            console.log(product)
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify(product)
            }).then((res)=>res.json()).then((data)=>{
                data.message=='successfully saved'?alert('product added'):alert('failed')
            })
        }
    }
  return (
    <div>
        <div className="details">
            <div className="title">
                <h2>Product title</h2>
                <input type="text" value={productdetails.name} onChange={changehandler} name='name' placeholder='enter name' />
            </div>
            <div className="title">
                <h2>Old price</h2>
                <input type="number" value={productdetails.old_price} onChange={changehandler} name='old_price' placeholder='enter price' />
            </div>
            <div className="title">
                <h2>New Price</h2>
                <input type="number" value={productdetails.new_price} onChange={changehandler} name='new_price' placeholder='enter price' />
            </div>
            <div className="title">
                <h2>Product category</h2>
                <select value={productdetails.category} onChange={changehandler} name="category" className='selector' id="">
                    <option value="women">women</option>
                    <option value="men">men</option>
                    <option value="kid">kid</option>
                </select>
            </div>
            <div className="title">
                <input onChange={imagehandler} type="file" name='image' />
            </div>
            <button onClick={()=>addproducts()}>add</button>
        </div>
    </div>
  )
}

export default Addproducts