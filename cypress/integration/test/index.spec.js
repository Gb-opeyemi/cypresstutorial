import PageObjects from '../../support/pageObjects/pageObjects'
const actions = new PageObjects()
describe('Test quidax login', ()=>{

    it('Launch the site', ()=>{
        cy.visit('/')
        })
    it('Click the Sign In Icon', ()=>{
            cy.fixture('elementMapper').then((em)=>{
                actions.clickAnElement(em.signInIcon)

            })
        }) 
    it('Insert Credentials', ()=>{
            cy.fixture('elementMapper').then((em)=>{
                actions.typeAText(em.emailField, em.emailText)
                actions.typeAText(em.passwordField, em.passwordText)

            })
        }) 
    it('Click the Sign in button', ()=>{
            cy.fixture('elementMapper').then((em)=>{
                actions.clickAnElement(em.signInBtn)

            })
        }) 




               /* cy.get(em.newDeviceField).should('be.visible').type(em.newDeviceText)
                cy.get(em.newDeviceBtn).should('be.visible').click()
                cy.get(em.trustDeviceBtn).should('be.visible').click()
                //cy.get('a[href*="/trusted_devices"]').click*/
            
    
 })   
