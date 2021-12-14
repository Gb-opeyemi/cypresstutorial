import PageObjects from '../pageObjects/pageObjects'
const page = new PageObjects()

Cypress.Commands.add('openSite', () => { 
    cy.visit('/')
})

Cypress.Commands.add('clickAnElement', (element) => { 
    page.clickAnElement(element)
})

Cypress.Commands.add('typeSomeText', (field, text) => { 
    cy.get(field).should('be.visible').type(text) 
})

Cypress.Commands.add('verifyPresence', (element) => { 
    cy.get(element).should('be.visible')
})

Cypress.Commands.add('verifyText', (element, text) => { 
    cy.get(element).should('contain', text)
})