import React from 'react';
import '../header/header.css';
import { Link } from 'react-router-dom';
import camera from '../../../images/camera/camera@2x.png'
function Header() {
  return (
    <>
      <header className="header">
        <section className='logo'> 
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="64" viewBox="0 0 64 64">
          <g id="icon" transform="translate(-903 -260)">
            <g id="circle_4" transform="translate(903 260)" fill="#006238" stroke="#006238" stroke-width="1">
              <circle cx="32" cy="32" r="32" stroke="none" />
              <circle cx="32" cy="32" r="31.5" fill="none" />
            </g>
            <g id="circle_3" transform="translate(911 268)" fill="none" stroke="#fff" stroke-width="2">
              <circle cx="24" cy="24" r="24" stroke="none" />
              <circle cx="24" cy="24" r="23" fill="none" />
            </g>
            <g id="circle_2" transform="translate(921 278)" fill="none" stroke="#fff" stroke-width="2">
              <circle cx="14" cy="14" r="14" stroke="none" />
              <circle cx="14" cy="14" r="13" fill="none" />
            </g>
            <g id="circle_1" transform="translate(931 288)" fill="#fff" stroke="#fff" stroke-width="2">
              <circle cx="4" cy="4" r="4" stroke="none" />
              <circle cx="4" cy="4" r="3" fill="none" />
            </g>
          </g>
        </svg>
        <h2>INSTACLONE</h2>

          </section>
      
        <Link to='/details'><section className='camera-icon'> <img src={camera} alt="camera" height="40px" width="40px" /> </section></Link>
      </header>
    </>
  )
}
export default Header;