import React from 'react';
import { Link } from 'react-router-dom';
import "./landingpage.css";
 
export default function Landing_page() {
  return (
    <>
    <h1 className='welcomeheading'>Welcome To 10x Academy</h1>
    <div className='container'>
    <div className='landigpage-image'>
    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
    </div>
    <div className='container1'>
      <h1 className='landingpage-heading'>10X TEAM 04</h1>
    <Link to={"/instaclone"}>
    <button className='landingpage-button'> 
      Enter
    </button>
    </Link>
    </div>
    </div>
    </>
  )
}
