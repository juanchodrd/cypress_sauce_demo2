Feature: Inicio de sesión

Scenario: Inicio de sesión exitoso
  Given que estoy en la página de login
  When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
  Then debería ver la página de productos

Scenario: Error de inicio de sesión con credenciales incorrectas
  Given que estoy en la página de login
  When ingreso el usuario "incorrecto" y la contraseña "incorrecta"
  Then debería ver un mensaje de error