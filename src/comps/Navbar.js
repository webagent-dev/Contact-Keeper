import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar-container'>
          <div className='header'>
            <Link to='/'>
              <h1 className='head-word'>Contact-book</h1></Link>
               <Link to='form'>
            <button className='btn'>Create-contact</button>
        </Link>
          </div>
        </div>
    )
}

export default Navbar
