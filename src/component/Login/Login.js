import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

import './Login.css'

const Login = () => {
    const navigate = useNavigate();

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('');
  const [msg,setmsg] = useState("")

  const uploadPost = async (e) => {

  const formData = new FormData();
  formData.append("email",email)
  formData.append("password",password)
  console.log(email,password,formData);

  const res = await fetch("http://localhost:5050/verify/login", {
    method: 'POST',
    headers:{
      "Content-type": "application/json",
    },
    body : JSON.stringify({email,password})
  })
  
  const response = await res.json()
  console.log(response.status);
  if(response.status==="failed"){
    setmsg("user doesn't exist")
  }
  else if(response.status==="oopps!!"){
    setmsg("Check your password")
  }
  else if(response.status==='Hurray'){
    navigate('/instaclone')
  }
  }
 
  return (
    <div className='main-div'>
        <div className='main-inside-div'>
      <div className='login'>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>{setemail(e.target.value)}} className='login__email' required></input>
        <input type="password" placeholder="Enter your Password"  value={password} onChange={(e)=>{setpassword(e.target.value)}}  className='login__password'></input>
        <button type='submit'className='login__btn' onClick={uploadPost}>Login</button><br/>
        <span className='msg'>{msg}</span>
        <div className='reg-login'><span className='acc'>Don't have an account?</span><br/>
        <Link to='/register'><button type='submit' className='login__reg'>Register</button></Link></div>

      </div>
      </div>
    </div>
  )
}

export default Login
