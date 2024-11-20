Feature: Inicio de sesión

Scenario: Inicio de sesión exitoso
  Given que estoy en la página de login
  When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
  Then debería ver la página de productos

Scenario Outline: Error de inicio de sesión con credenciales incorrectas
  Given que estoy en la página de login
  When ingreso el usuario "<usuario>" y la contraseña "<contraseña>"
  Then debería ver un mensaje de error

  Examples:
    | usuario     | contraseña |
    | standard_user  | incorrecta |
    | incorrecto2 | innnn2     |
    | incorrecto3 | innnn3     |
