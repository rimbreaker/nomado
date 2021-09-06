describe('basic flows',()=>{
    
    it('user can enter dart mode',()=>{
        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox').type('John')
        cy.findByRole('button', { name: /ok/i }).click()
        cy.findByRole('heading', { name: /try your luck/i }).click()
        cy.findByRole('heading', { name: /home/i }).click()
    })
    it('user can enter widget mode',()=>{
        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox').type('John')
        cy.findByRole('button', { name: /ok/i }).click()
        cy.findByRole('heading', { name: /search by widget/i }).click()
        cy.findByText(/category: startup🔽/i).click()
        cy.get('li[id="scores"]').click()
        cy.findByRole('heading', { name: /home/i }).click()
    })
    it('user can view recents list',()=>{
        cy.visit('http://localhost:3000/');
        cy.findByRole('textbox').type('John')
        cy.findByRole('button', { name: /ok/i }).click()
        cy.findByText(/John🔽/i).click()
        cy.get('li[id="recent-locations"]').click()
        cy.findByRole('button', { name: /clear list/i }).click()
        cy.findByRole('heading', { name: /home/i }).click()
    })
})