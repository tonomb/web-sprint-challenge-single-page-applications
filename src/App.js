import React, { useState, useEffect } from "react";
import { Switch, Route} from 'react-router-dom'
import * as Yup from "yup";

import Navbar from './components/navbar'
import Home from './components/home'
import Form from './components/form'
import formSchema from './components/formSchema'

const initialFormValues ={
  name:'',
  size:'',
  toppings:{
    pepperoni: false,
    sausage: false,
    bacon: false,
    onions: false,
  },
  instructions:''
}


const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [currentOrder, setCurrentOrder] = useState(initialFormValues) 
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    terms: ""
  });

  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      console.log(valid);
      
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  function onSubmit(e){

    e.preventDefault()
    setCurrentOrder(formValues)
    setFormValues(initialFormValues)
    
  }

  function onInputChange(e){

    const { name, value} = e.target

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  function validate(e){

    const { name, value} = e.target
    Yup
    .reach(formSchema, name)
    //we can then run validate using the value
    .validate(value)
    // if the validation is successful, we can clear the error message
    .then(valid => {
      setErrors({
        ...errors,
        [name]: ""
      });
    })
    /* if the validation is unsuccessful, we can set the error message to the message 
      returned from yup (that we created in our schema) */
    .catch(err => {
      setErrors({
        ...errors,
        [name]: err.errors[0]
      });
    });

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  function onCheckboxChange(e) {
    const { name, checked} = e.target
    
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  return (
      <div>
        <Navbar />
        <Switch>  
	        <Route path='/pizza'>
            <Form 
            formValues={formValues}
            currentOrder={currentOrder}
             onSubmit={onSubmit}
             onInputChange={onInputChange}
             onCheckboxChange={onCheckboxChange}
             errors={errors}
             buttonDisabled={buttonDisabled}
             validate={validate}/>
	        </Route>
	        <Route path='/'>
            <Home />
	        </Route>
        </Switch>
      </div>
      
  );
};
export default App;
