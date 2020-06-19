import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar(props){

    return(
        <div className='navbar'>
            <div className='navbar-container'>
                <Link>
                    <h1>Lambda Eats</h1>
                </Link>
                <nav className='navbar-links'>
                    <Link className='navbar-link' to={'/'}>
                        Home
                    </Link>
                    <a className='navbar-link'href='/'>Help</a>
                </nav> 
            </div>
        </div>
    )
}

export default Navbar;