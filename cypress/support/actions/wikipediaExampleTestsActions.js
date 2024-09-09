import wikipediaExampleTests from "../pageObjects/wikipediaExampleTests";
import {globalActions} from "./globalActions";
import paths from "../dataProviders/paths.json";

export class Actions {

  visitHomePage() {
    globalActions.GoToSpecificPage(paths.home)
  }

  confirmHomePage() {
    cy.url()
      .should('contain', paths.home)  
  }

  searchByText(searchByText) {
    cy.get(wikipediaExampleTests.serachField)
      .type(searchByText, {delay:0})   
    cy.get(wikipediaExampleTests.firstFilteredOption)
      .click() 
  }

  confirmInformationURL(url) {
    cy.url()
      .should('contain', url)  
  }

  clickOnAcceder() {
    cy.get(wikipediaExampleTests.accederBtn)
    .click() 
  }

  confirmAccederPageTitle() {
    cy.get(wikipediaExampleTests.accederPageTitle)
    .should('contain', "Ingresar")
  }

  loginWithValidUser() {
    const user = Cypress.env("user").username
    const pass = Cypress.env("user").password

    cy.get(wikipediaExampleTests.userInput)
      .type(user)  
    cy.get(wikipediaExampleTests.passInput)
      .type(pass)       
    cy.get(wikipediaExampleTests.confirmLoginBtn)
      .click()

  }

  loginWithNoValidUser() {
    cy.get(wikipediaExampleTests.userInput)
      .type("NO_VALID_USER")  
    cy.get(wikipediaExampleTests.passInput)
      .type("NO_VALID_PASSWORD")       
    cy.get(wikipediaExampleTests.confirmLoginBtn)
      .click()
  } 

  checkUserLogged() {
    cy.get(wikipediaExampleTests.loggedUserBtn)
    .should('exist')
  } 

  checkLoginError() {
    cy.get(wikipediaExampleTests.loginErrorMsg)
    .should('contain', "El nombre de usuario o la contraseña que proporcionaste son incorrectos")
  } 

}
export const wikipediaExampleTestsActions = new Actions();
