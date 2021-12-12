class PageObjects{
    clickAnElement(element){
        cy.get(element).should('be.visible').click()
    }
    typeAText(field, text){
        cy.get(field).should('be.visible').type(text)
    }

}
export default PageObjects