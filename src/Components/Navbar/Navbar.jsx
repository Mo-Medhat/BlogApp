import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return <>
    <nav className="navbar .bgDiff">
        <div className="container-fluid ">
            <div className="brand mx-auto mx-sm-0">
                <Link to="/" className='h2'>BLOG</Link>
            </div>
            <div className="navs mx-auto ms-sm-auto me-sm-0">
                <Link className="navbar-brand mx-2 px-3" to="/">Home</Link>
                <Link className="navbar-brand mx-2 px-3" to="/about">About Us</Link>
            </div>
        </div>
    </nav>
  </>
}

export default Navbar