import React, { useState } from 'react'
import './CSS/login.css'
import { motion } from 'framer-motion'

export const Loginsignup = () => {
  const[state,setState]=useState("Login")
  const[formdata,setformdata]=useState({
    username:"",
    email:"",
    password:""
  })
  const changehandler=(event)=>{
    setformdata({...formdata,[event.target.name]:event.target.value})
  }
  const login= async ()=>{
    console.log('login function',formdata)
    let responsedata;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-type':'application/json'
      },
      body:JSON.stringify(formdata),
    }).then((res)=>{
      let response=res.json();
      return response;
    }).then((data)=>{
      responsedata=data;
    })
    if(responsedata.success){
      localStorage.setItem('auth-token',responsedata.token);
      alert(responsedata.message);
      window.location.replace('/');
    }
    else{
      alert(responsedata.message);
    }
  }
  const signup= async()=>{
    console.log('signup function',formdata)
    let responsedata;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-type':'application/json',
      },
      body:JSON.stringify(formdata),
    }).then((res)=>{
      let response=res.json()
      return response;
    }).then((data)=>{
      responsedata=data
    })
    if(responsedata.success){
      localStorage.setItem('auth-token',responsedata.token)
      window.location.replace('/')
      alert(responsedata.message);

    }
    else{
      alert(responsedata.error)
    }
  }
  return (
    <motion.div className='outer-login' initial={{width:0}} animate={{width:'100%'}} exit={{x:window.innerWidth,transition:{duration:1}}}>
      <div className="login-container">
        <div className="signupbanner">
          <h1>{state}</h1>
        </div>
        <div className="inputfields">
          {/* <form action="" className='inputfields'> */}
          {state==='Sign up'?<input type="text" name='username' value={formdata.username} onChange={changehandler} placeholder='Your Name' />:<></>}
          <input type="email" name='email' value={formdata.email} onChange={changehandler} placeholder='Your Email' />
          <input type="password" name='password' value={formdata.password} onChange={changehandler} placeholder='Your Password' id='' />
        <div className="signupbtn">
          <button onClick={()=>{state==='Sign up'?signup():login()}} >Continue</button>
        </div>
        {/* </form> */}
        </div>
        <div className="already">
          {state==='Sign up'?<p>Already Have an account ?  <span onClick={()=>{setState('Login')}} >Login Here</span></p>
          :<p>New User? Create an Account <span onClick={()=>{setState('Sign up')}}>Create Account</span></p>}
        </div>
        <div className="agree">
          <input type="checkbox" name=''id='' />
          <p>By Continuing I agree to the terms and policies</p>
        </div>
      </div>

    </motion.div>
  )
}
