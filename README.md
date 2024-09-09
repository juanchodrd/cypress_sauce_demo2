# Proyecto base de Cypress para realizar tests con Cucumber y page objects

Este proyecto base está creado con el objetivo de proporcionar una plantilla para realizar pruebas E2E con cypress. Tiene toda la estructura necesaria para empezar a desarrollar tests sin perder tiempo en configuraciones.


## Estructura

La plantilla está preparada para trabajar definiendo los tests con cucumber y los elementos en pageObjects, ya que así conseguimos una mayor mantenibilidad y legibilidad.

Para realizar la integración con cucumber, se ha utilizado el siguiente paquete de npm [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor).

Por tanto, el proyecto, se compone de la carpeta `cypress`. A su vez, dentro de ella nos podemos encontrar carpetas como: `features`, `fixtures`, `plugins` y `support`.

### Features

La carpeta `features` es la que está configurada en este caso para que Cypress lea los tests. En ella, incluiremos los Features `.feature` para que Cypress los ejecute. Tenemos la posibilidad de añadirlos en la raiz de dicha carpeta o en subcarpetas que nos ayuden a mantener una buena organización de los mismos.


### Fixtures

En la carpeta `fixtures` podemos situar los sets de datos que luego queremos recuperar en nuestros tests. Estos pueden ser ficheros de todo tipo, según nuestras necesidades. Ejemplos: .csv .xlsx .json ...


### Plugins

En la carpeta plugins esta situado el fichero `index.js` y es donde vamos a indicar a Cypress el uso y configuración de ciertos plugins


### Support

En la carpeta `support` es donde vamos a incluir los actions, page objects y los steps para nuestros tests


## Instalación

El único prerrequisito antes de la instalación del proyecto es tener [Node.js](https://nodejs.org/) instalado.

Teniendo Node instalado, para utilizar la plantilla solo tendremos que abrir la consola, situarnos en el directorio del proyecto e instalar las dependencias con el siguiente comando:

```sh
npm install
```

## Ejecución 

Cypress nos permite lanzar los tests desde su propia interfaz o directamente desde consola. Podemos optar por lanzarlos de una u otra forma según según los intereses del proyecto o incluso según la fase del mismo en la que nos encontremos.

### Ejecución desde interfaz

Para ejecutar el proyecto sobre un navegador de manera visual, basta con introducir el siguiente comando en la consola:

```sh
npx cypress open
```

A continuación, la interfaz cargará y nos mostrará todas las features que tengamos definidas en nuestro proyecto. Si queremos ejecutar alguna, simplemente debemos seleccionarla y comenzarán a ejecutarse los tests que la componen.

### Ejecución desde consola 

Ya sea para ejecutar los tests en un flujo de IC/CD o simplemente porque no nos interesa hacerlo desde interfaz, tenemos la posibilidad de hacerlo desde la línea de comandos.

Para ejecutar todos los tests del proyecto desde la consola, nos basta con ejecutar siguiente comando:


```sh
npx cypress run
```

El comando permite muchas opciones de parametrización. Una parametrización muy común es especificar tags a nivel de test o incluso de feature:


```js
tags = {"@SmokeTest"} // Ejecuta todos los escenarios con el tag @SmokeTest

tags = {"@SmokeTest, @RegressionTest"} // Ejecuta todos los escenarios que estén con el tag @SmokeTest o el tag @RegressionTest (condición OR)

tags = {"@SmokeTest", "@RegressionTest"} // Ejecuta todos los escenarios con los tags @SmokeTest y @RegressionTest (condición AND)

tags = {"~@SmokeTest"} // Ignora todos los escenarios con el tag @SmokeTest

tags = {"@RegressionTest, ~@SmokeTest"} // Ejecuta todos los escenarios con el tag @RegressionTest, pero ignora todos los que tengan el tag @SmokeTest

tags = {"@gui", "~@SmokeTest", "~@RegressionTest"} // Ignora todos los escenarios con el tag @SmokeTest y @RegressionTest pero ejecuta todos los que tengan el tag "@gui" 
```

```sh
npx cypress run -e TAGS=@SmokeTest
```

### Ejecución por entorno 

Ya sea por ejecución desde interfaz o por consola, por defecto cypress arranca cogiendo la configuración del fichero `cypress.config.js`, que es el que nos viene al instalarlo. Sin embargo, podemos crear nuevos y tener varios ficheros de configuración.

Un uso común y útil, es tener un fichero por cada entorno, de tal manera que cada uno tenga: baseurl, usuarios configuraciones... específicas de dicho entorno.

Para que Cypress los cargue, debemos indicarlo a través del parámetro `--config-file FICHERO_CONFIG.js`. Lo haremos a la hora de levantar la interfaz o a la de lanzar los tests desde consola, tal y como se indican en los siguientes ejemplos.
 

```sh
npx cypress open --config-file FICHERO_CONFIG.js
```

```sh
npx cypress run --config-file FICHERO_CONFIG.js
```

## Plugins 

Existen muchos plugins que se pueden utilizar para mejorar la calidad de nuestros tests, pero vamos a nombrar algunos de ellos.

### Gestión de carga de ficheros [cypress-file-upload](https://www.npmjs.com/package/cypress-file-upload)
Este paquete agrega un comando Cypress personalizado que le permite hacer una abstracción sobre cómo exactamente carga archivos a través de controles HTML y concentrarse en probar los flujos de trabajo del usuario.

### Visual testing con el plugin [cypress-image-diff-js](https://www.npmjs.com/package/cypress-image-diff-js)
Esta herramienta ayuda a hacer una regresión visual lo más simple posible, al exponer funciones básicas que le permiten ver la diferencia entre imágenes. El contenedor utiliza pixelmatch, que es simple y potente y se basa en cypress para tomar capturas de pantalla.


### Otros plugins interesantes que no se han incluido
- Si eres de usar el DOM Testing Library, se recomienda https://github.com/testing-library/cypress-testing-library que es la implementación para cypress de dicha librería.
- ¿Estás esperando a un elemento y no sabes cuánto tiempo? https://github.com/NoriSte/cypress-wait-until es de utilidad
- ¿Quieres saber cuánto tarda de media cada comando de Cypress?  https://github.com/archfz/cypress-duration-metrics