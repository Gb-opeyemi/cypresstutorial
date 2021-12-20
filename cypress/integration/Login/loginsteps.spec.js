Given ('I am on the quidax site', ()=>{
    cy.openSite()
})
When ('I click on the sign in icon', ()=>{
    cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.signInIcon)
    })
})
And ('I insert the Username', ()=>{
    cy.fixture('elementMapper').then((em)=>{
        cy.typeSomeText(em.emailField, em.emailText)
    })
})
And ('I insert the password', ()=>{
    cy.fixture('elementMapper').then((em)=>{
        cy.typeSomeText(em.passwordField, em.passwordText)
    })
})
And ('I click the sign in button', ()=>{
    cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.signInBtn)
    })
})
Then ('I should see the authorization page', ()=>{
    cy.fixture('elementMapper').then((em)=>{
        cy.verifyText(em.verifyNewDeviceElm, em.verifyNewDeviceText)
    })
})