import React from 'react';
import { Link } from 'react-router-dom';
import "./landingpage.css";
import coding from '../../images/coding.jpg'


export default function Landing_page() {
  return (
    <>
      <div className='maindiv'>
        <div className='maindiv__welcome'>
          <h1>SAGA<pan className="name">rika</pan></h1>
        </div>
      </div>

        <div className='container'>
          <div className='landingpage-image'>
            <img src={coding} alt="coding" height='400px'></img>
          </div>

            <div className='container1'>
              <h1 className='landingpage-heading'>10X TEAM</h1>
              <Link to={"/login"}>
                <button className='landingpage-button'>
                  CLICK ME!!!
                </button>
              </Link>
            </div>
  

        </div>

    </>
  )
}
