class PageObjects{
    clickAnElement(element){
        cy.get(element).should('be.visible').click()
    }
    typeAText(field, text){
        cy.get(field).should('be.visible').type(text)
    }
    scrollToAnElement(element){
        cy.get(element).scrollIntoView()
    }
    pageLoader(element){
        cy.get(element).should('be.visible')
    }
    verifyText(element, text){
        cy.get(element).should('contain', text)
    }

}
export default PageObjects