import React from 'react';
import './navbar.css'


function Navbar(props){

    return(
        <div className='navbar'>
            <div className='navbar-container'>
                <h1>Lambda Eats</h1>
                <nav className='navbar-links'>
                    <a className='navbar-link' href='/'>Home</a>
                    <a className='navbar-link'href='/'>Help</a>
                </nav> 
            </div>
        </div>
    )
}

export default Navbar;