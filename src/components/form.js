import React from 'react';
import './form.css'

function PizzaForm(params) {
    return(
        <div className='form-container'>
            <h1>Build your own pizza</h1>
            <img src='https://images.unsplash.com/photo-1489564239502-7a532064e1c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='pizza-oven'/>
            <form className='form'>
                <div className='form-label'>
                    Your Full Name
                </div>
                <input className='form-input' type='text' name='name' placeholder='Please enter your full name'></input>
                <div className='form-label'>
                    Choice of Size
                </div>
                <select className='form-input' required>
                        <option>Select</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                </select>
                <div className='form-label'>
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
                    </label>
                    <div className='form-label'>
                    Add Toppings
                    </div>
                    <label className='checkbox-label'> 
                        <input type='checkbox' name='Pepperoni'></input>
                        Pepperoni
                    </label>
                    <label className='checkbox-label'> 
                        <input type='checkbox' name='Sausage'></input>
                        Sausage
                    </label>
                    <label className='checkbox-label'> 
                        <input type='checkbox' name='Canadien Bacon'></input>
                        Canadien Bacon
                    </label>
                    <label className='checkbox-label'> 
                        <input type='checkbox' name='Spicy Italian Sausage'></input>
                        Spicy Italian Sausage
                    </label>
                    <label className='checkbox-label'> 
                        <input type='checkbox' name='Garlic Chiken'></input>
                        Garlic Chiken
                    </label>
                    <label className='checkbox-label'> 
                        <input type='checkbox' name='Onions'></input>
                        Onions
                    </label>
                    <label className='checkbox-label'> 
                        <input type='checkbox' name='Green Peppers'></input>
                        Green Peppers
                    </label>
                    <label className='checkbox-label'> 
                        <input type='checkbox' name='Diced Tomatos'></input>
                        Diced Tomatos
                    </label>
                    <div className='form-label'>
                    Special Instructions
                    </div>
                    <textarea name="instructions"
                            rows="3" cols="33">
                        Anything else you´d like to add?
                    </textarea>
                    <button className='order-btn' type='submit'>Place Order</button>
            </form>
            
        </div>
    )
}

export default PizzaForm;