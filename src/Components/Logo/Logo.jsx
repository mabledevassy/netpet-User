import React from 'react'
import './Logo.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="PETNET Logo" />
        <p>PETNET</p>
        {/* <div className='b'>
          <button ><Link to='/login'></Link>Logout</button>
        </div> */}
      </div>
    </div>
  )
}

export default Logo;
