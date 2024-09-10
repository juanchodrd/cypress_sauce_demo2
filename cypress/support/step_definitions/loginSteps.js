import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../pageObjects/LoginPage.js';

Given('que estoy en la página de login', () => {
  cy.visit('/');
});

When(
  'ingreso el usuario {string} y la contraseña {string}',
  (usuario, contraseña) => {
    loginPage.login(usuario, contraseña);
  }
);

Then('debería ver la página de productos', () => {
  loginPage.verifyCorrectLogin();
});

Then('debería ver un mensaje de error', () => {
  loginPage.verifyIncorrectLogin();
});
