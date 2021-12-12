describe('Test quidax login', ()=>{

    it('Launch the site', ()=>{
        cy.visit('/')
        })
    it('Click the Sign In Icon', ()=>{
            cy.fixture('elementMapper').then((em)=>{
                cy.get(em.signInIcon).should('be.visible').click()

            })
        }) 
    it('Insert Credentials', ()=>{
            cy.fixture('elementMapper').then((em)=>{
                cy.get(em.emailField).should('be.visible').type(em.emailText)
                cy.get(em.passwordFields).should('be.visible').type(em.passwordText)

            })
        }) 
    it('Click the Sign in button', ()=>{
            cy.fixture('elementMapper').then((em)=>{
                cy.get(em.signInBtn).should('be.visible').click()

            })
        }) 




               /* cy.get(em.newDeviceField).should('be.visible').type(em.newDeviceText)
                cy.get(em.newDeviceBtn).should('be.visible').click()
                cy.get(em.trustDeviceBtn).should('be.visible').click()
                //cy.get('a[href*="/trusted_devices"]').click*/
            
    
 })   
