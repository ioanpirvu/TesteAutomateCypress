describe('On LinkedIn', () => {

    it('I can login', () => {
        cy.visit('https://linkedin.com');
          
        cy.get('[action-type="ACCEPT"]').click();
          
        cy.get('.nav__button-secondary').click();

        cy.get('#username').type('neluparvu@gmail.com');

        cy.get('#password').type('77linkedinBv#');

        cy.get('.btn__primary--large').click();
        
    })

})