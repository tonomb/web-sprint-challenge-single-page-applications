import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from './navbar'

import './home.css'

function Home(props){


    return(
        <div>
            <div className='home-splash'>
                <h1>Your favorite food, deliverd while coding</h1>
                <Link to='/pizza'>
                    <button>Pizza?</button>
                </Link>
            </div>
        </div>
    )
}

export default Home