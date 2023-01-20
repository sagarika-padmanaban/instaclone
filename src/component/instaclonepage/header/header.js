import React from 'react';
import '../header/header.css';
import {Link} from 'react-router-dom'
function Header(){
    return (
    <>
      <nav className="header">
       <section className='logo'> <img src={require("../../../images/newestinstaclone.jpg")} alt="logo" /></section>
       <Link to='/details'><section className='camera-icon'> <img src={require("../../../images/newcamera.jpg")} alt="camera" height="70px" width="90px"/> </section></Link>
      </nav>
    </>
    )
}
export default Header;