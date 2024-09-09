export class Actions {

    GoToSpecificPage(rawUrl) {
      const basePage = Cypress.config('baseUrl')
      cy.visit(basePage + rawUrl , {log: false})
    }

}
  export const globalActions = new Actions();