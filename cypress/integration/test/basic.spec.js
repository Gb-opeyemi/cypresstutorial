/// <reference types="cypress" />

import PageObjects from '../../support/pageObjects/pageObjects'
const actions = new PageObjects()
describe('Test quidax login', ()=>{

    it('Launch the site', ()=>{
        cy.openSite()
        })
    it('Click the Sign In Icon', ()=>{
            cy.fixture('elementMapper').then((em)=>{
                cy.clickAnElement(em.signInIcon)

            })
        }) 
    it('Insert Credentials', ()=>{
            cy.fixture('elementMapper').then((em)=>{
                cy.typeSomeText(em.emailField, em.emailText)
                cy.typeSomeText(em.passwordField, em.passwordText)

            })
        }) 
    it('Click the Sign in button', ()=>{
            cy.fixture('elementMapper').then((em)=>{
                cy.clickAnElement(em.signInBtn)

            })
        }) 

    it('Verify you are on New Device and Location Page', ()=>{
            cy.fixture('elementMapper').then((em)=>{
                cy.verifyText(em.verifyNewDeviceElm, em.verifyNewDeviceText)

            })
        }) 
})