import { useState } from 'react';
// import { Link } from 'react-router-dom';
import {json, useNavigate} from "react-router-dom";
import './Register.css'

const Register = () => {
  const navigate = useNavigate();

  const [name, setname] = useState('');
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('');
  const [msg,setmsg] = useState("")


  const uploadPost = async (e) => {

  const formData = new FormData();
  formData.append("name",name)
  formData.append("email",email)
  formData.append("password",password)

  const res = await fetch("https://insta-app-18wr.onrender.com/verify/register", {
    method: 'POST',
    headers:{
      "Content-type": "application/json",
    },
    body : JSON.stringify({name,email,password})
  })
  const response = await res.json()
  if(response.status == "Failed-user"){
      setmsg("User already exists")
  }
  if(response.status == "success"){
    navigate('/login')
}

  
  }
 
  return (
    <div className='main-div'>
        <div className='main-inside-div'>
      <div className='reg'>
      <input type="text" placeholder="Enter your name"   value={name}  onChange={(e)=>{setname(e.target.value)}} className='reg__name' required/>
        <input type="email" placeholder="Enter your email"    value={email} onChange={(e)=>{setemail(e.target.value)}} className='reg__email' required/>
        <input type="password" placeholder="Enter your Password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className='reg__password' required/>
        <button type='submit'className='reg__btn' onClick={uploadPost}>Sign up</button>
        <span className='msg'>{msg}</span>
      </div>
      </div>
    </div>
  )
}

export default Register
