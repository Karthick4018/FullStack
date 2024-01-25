import React, { useContext, useEffect } from 'react'
import './navbar.css'
import logo from '../Assests/logo.png'
import cart from '../Assests/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/Shopcontext'
export const Navbar = () => {
  const{cartIcon}=useContext(ShopContext);
  const[menu,showmenu]=useState("shop");
  const[ham,showham]=useState(false);
  const [color,setColor]=useState(false)
  const [name,setname]= useState("Guest")
    const changeColor =()=>{
        if(window.scrollY>=1){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor);
    useEffect(()=>{
      if(localStorage.getItem('auth-token')){
        fetch('https://karthiks-sos.onrender.com/getdetails',{
          method:'POST',
          headers:{
            Accept:'application/json',
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Content-type':'application/json',
          },
          body:'',
        }).then((res)=>{
          let response = res.json();
          return response;
        }).then((data)=>{
          setname(data)
        })
      }
    },[])
  return (
    <div>
        <div className={color? 'navbar color2':'navbar'}>
            <div className="logo">
              <img src={logo} alt="logo" />
                <h2>KaRtHiK</h2>
            </div>
            <div className='menu'>
              <ul className={ham? 'items-open':''}>
                <li className={`${menu==='shop'?'color1':''}`}onClick={()=>showmenu("shop")}> <Link style={{textDecoration:'none',color:'black'}} to='/shop'>SHOP</Link></li>
                <li className={`${menu==='men'?'color1':''}`} onClick={()=>showmenu("men")}><Link style={{textDecoration:'none',color:'black'}} to='/mens'>MEN</Link></li>
                <li className={`${menu==='women'?'color1':''}`} onClick={()=>showmenu("women")}><Link style={{textDecoration:'none',color:'black'}} to='/womens'>WOMEN</Link></li>
                <li className={`${menu==='kids'?'color1':''}`} onClick={()=>showmenu("kids")}><Link style={{textDecoration:'none',color:'black'}} to='/kids'>KIDS</Link></li>
                
                {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token'); alert('logged out successfully'); window.location.replace('/')}}><Link style={{textDecoration:'none',color:'black'}} to='/login'>LOGOUT</Link></button>
                :<button><Link style={{textDecoration:'none',color:'black'}} to='/login'>LOGIN</Link></button>}
                
                <div className="redbtn">
                <Link to='/cart'><img src={cart} alt="cart" /></Link>
                <div className="redicon">{cartIcon()}</div>
              </div>
              {localStorage.getItem('auth-token')?<p>{name}</p>:<p>Guest</p>}
              </ul>
            </div>
            <div className="hammenu" onClick={()=>showham(!ham)}>
            <div className='ham'></div>
            <div className='ham'></div>
            <div className='ham'></div>
            </div>
            
        </div>
    </div>
  )
}
