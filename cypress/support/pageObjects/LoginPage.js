class LoginPage {
  // Definición de elementos
  usernameInput = '[data-test="username"]';
  passwordInput = '[data-test="password"]';
  loginSubmitButton = '[data-test="login-button"]';
  textLoginIncorrecto = '[data-test="error-button"]';

  // Método para ingresar el nombre de usuario
  enterUsername(value) {
    cy.get(this.usernameInput).type(value);
  }

  // Método para ingresar la contraseña
  enterPassword(value) {
    cy.get(this.passwordInput).type(value);
  }

  // Método para hacer clic en el botón de login
  submitLogin() {
    cy.get(this.loginSubmitButton).click();
  }

  // Método que encapsula el flujo de login
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.submitLogin();
  }

  // Método que verifica que el usuario se haya logueado correctamente
  verifyCorrectLogin() {
    cy.url().should('include', 'inventory.html');
  }

  // Método que verifica que el usuario se haya logueado correctamente
  verifyIncorrectLogin() {
    cy.get(this.textLoginIncorrecto).should('be.visible');
  }
}

export default new LoginPage();
