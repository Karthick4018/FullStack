import React,{createContext, useEffect, useState} from "react";
export  const ShopContext= createContext(null);
const CartProducts=()=>{
    let Cart={}
    for (let index = 0; index < 300; index++) {
        Cart[index]=0;
    }
    return Cart;
}
const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(CartProducts());
    const addToCart=(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('https://karthiks-sos.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-type':'application/json',
                },
                body:JSON.stringify({"itemid":itemid})
            }).then((res)=>{
                let response = res.json();
                return response;
            }).then((data)=>{
                console.log(data);
            })
        }
        
    }
    const removeCartItems=(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://karthiks-sos.onrender.com/removecart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                   'auth-token':`${localStorage.getItem('auth-token')}`,
                   'Content-type':'application/json',
                },
                body:JSON.stringify({"itemid":itemid}),
            }).then((res)=>{
                let response =res.json();
                return response;
            }).then((data)=>{
                console.log(data)
            })
        }
    }
    const getTotalamount = ()=>{
        let totalamount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemdetails=all_product.find((e)=>e.id===Number(item))
                totalamount+=itemdetails.new_price*cartItems[item];
            }
            
        }
        return totalamount;
    }
    const cartIcon=()=>{
        let totalcart=0;
        for(const item in cartItems){
            totalcart+=cartItems[item];
        }
        return totalcart;
    }
    const [all_product,setallproducts]=useState([])
    useEffect(()=>{
        fetch('https://karthiks-sos.onrender.com/allproducts')
        .then((res)=>{
            let response=res.json()
            return response;
        })
        .then((data)=>{
            setallproducts(data)
        })
        if(localStorage.getItem('auth-token')){
            fetch('https://karthiks-sos.onrender.com/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-type':'application/json',
                },
                body:"",
            }).then((res)=>{
                let response = res.json();
                return response;
            }).then((data)=>{
                setCartItems(data);
            })
        }
    },[])
    const contextvalues={all_product,cartItems,addToCart,removeCartItems,getTotalamount,cartIcon}
    return(
        <ShopContext.Provider value={contextvalues}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;