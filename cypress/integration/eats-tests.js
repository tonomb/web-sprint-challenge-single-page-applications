
describe('Home Behaviour' , ()=>{
    it('page loads', () =>{
        cy.visit('http://localhost:3000')
        cy.contains('Your favorite food')
    })
})


describe('Form Behaviour' , ()=>{
    it('form loads on /pizza', () =>{
        cy.visit('http://localhost:3000')
        cy.get('button').click()
        cy.url('http://localhost:3000/pizza')
    })

    it('User can input their name', ()=>{
        cy.get('input.form-input')
        .type('Wade Watts')
        .should('have.value', 'Wade Watts')
    })

    it('user can select multiple toppings', ()=>{
        cy.get(':nth-child(6) > input').click()
        cy.get(':nth-child(7) > input').click()
        cy.get(':nth-child(8) > input').click()
        cy.get(':nth-child(9) > input').click()
        cy.get(':nth-child(6) > input').click()
        cy.get(':nth-child(8) > input').click()
    })

    it('user can submit the form', ()=>{
        cy.get('.order-btn').click()
        cy.contains('Name: Wade Watts')
    })
})
