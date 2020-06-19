import React from "react";
import { Switch, Route, Link } from 'react-router-dom'

import Navbar from './components/navbar'
import Home from './components/home'
import Form from './components/form'

const App = () => {

  return (
      <div>
        <Navbar />
        <Switch>   
	        <Route path='/pizza'>
            <Form />
	        </Route>
	        <Route path='/'>
            <Home />
	        </Route>
        </Switch>
      </div>
      
  );
};
export default App;
