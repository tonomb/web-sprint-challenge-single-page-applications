import React from "react";
import { Link } from 'react-router-dom'
import "./form.css";

function PizzaForm(props) {
  const { formValues, onSubmit, onInputChange, onCheckboxChange, currentOrder,errors,buttonDisabled, validate} = props;

  return (
    <div className="form-container">
      <h1>Build your own pizza</h1>
      <img
        src="https://images.unsplash.com/photo-1489564239502-7a532064e1c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="pizza-oven"
      />
      <form className="form" onSubmit={onSubmit}>
        <div className="form-label">Your Full Name</div>
        <input
          className="form-input"
          type="text"
          name="name"
          value={formValues.name}
          placeholder="Please enter your full name"
          onChange={onInputChange, validate}
        ></input>
        {errors.name ? (<p className="error">{errors.name}</p>) : null}
        <div className="form-label">Choice of Size</div>
        <select 
        name='size'
        className="form-input"
        value={formValues.size}
        onChange={onInputChange} 
        >
          <option value=''>Select</option>
          <option value='small' >Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>
        {/* <div className='form-label'>
                    Choice of Sauce
                </div>
                    <label className='radio-label'> 
                        <input type='radio' name='Original Red'></input>
                        Original Red
                    </label>
                    <label className='radio-label'> 
                        <input type='radio' name='Garlic Ranch'></input>
                        Garlic Ranch
                    </label>
                    <label className='radio-label'> 
                        <input type='radio' name='BBQ Sauce'></input>
                        BBQ Sauce
                    </label>
                    <label className='radio-label'> 
                        <input type='radio' name='Spinach Alfredo'></input>
                        Spinach Alfredo
                    </label> */}
        <div className="form-label">Add Toppings</div>
        <label className="checkbox-label">
          <input 
          type="checkbox" 
          name="pepperoni"
          onChange={onCheckboxChange}
          checked={formValues.toppings.pepperoni}
          ></input>
          Pepperoni
        </label>
        <label className="checkbox-label">
          <input 
          type="checkbox" 
          name="sausage"
          onChange={onCheckboxChange}
          checked={formValues.toppings.sausage}></input>
          Sausage
        </label>
        <label className="checkbox-label">
          <input 
          type="checkbox" 
          name="bacon"
          onChange={onCheckboxChange}
          checked={formValues.toppings.bacon}
          ></input>
          Bacon
        </label>
        <label className="checkbox-label">
          <input 
          type="checkbox" 
          name="onions"
          onChange={onCheckboxChange}
          checked={formValues.toppings.onions}
          ></input>
          Onions
        </label>
        <div className="form-label">Special Instructions</div>
        <textarea
          name="instructions"
          rows="3"
          cols="33"
          placeholder="Anything else you´d like to add?"
          onChange={onInputChange} 
          value={formValues.instructions}
        ></textarea>
        <button className="order-btn" type="submit" disabled={buttonDisabled}>
          Place Order
        </button>
      </form>
    </div>
  );
}

export default PizzaForm;
