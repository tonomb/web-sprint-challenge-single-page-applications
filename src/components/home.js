import React from 'react';
import Navbar from './navbar'

import './home.css'

function Home(props){


    return(
        <div>
            <Navbar />
            <div className='home-splash'>
                <h1>Your favorite food, deliverd while coding</h1>
                <button>Pizza?</button>
            </div>
        </div>
    )
}

export default Home