//const properties = require("../fixtures/properties")

export function tipear(elemento, texto) {
  cy.get(elemento).clear().type(texto);
}

export function clickear(elemento) {
  cy.get(elemento).click();
}

export function limpiar(elemento) {
  cy.get(elemento).clear();
}

export function containsClick(texto) {
  cy.contains(texto).click();
}

export function assertText(elemento, texto) {
  cy.get(elemento).should('have.text', texto);
}

export function assertTextContains(elemento, texto) {
  cy.get(elemento).should('contain', texto);
}
// Retorna un entero aleatorio entre min (incluido) y max (excluido), ejemplo si va min=0 max=2 puede devolver 0, 1, 2
// ¡Usando Math.round() te dará una distribución no-uniforme!
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//devuelve una cadena string random de (i) cantidad de caracteres
export function randomString(cant) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < cant; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export function goTo(texto) {
  containsClick(texto);
}

export function ifElementExist(body, elementoBuscado) {
  cy.get(body).then(($body) => {
    if ($body.find(elementoBuscado).length > 0) {
      cy.log('se encontro');
    } else {
      cy.log('NO se encontro');
    }
  });
}

export function checkIfEleExists(body, ele) {
  return new Promise((resolve, reject) => {
    /// here if  ele exists or not
    cy.get(body)
      .find(ele)
      .its('length')
      .then((res) => {
        if (res > 0) {
          //// do task that you want to perform
          cy.log('elemento encontrado');
          resolve();
        } else {
          reject();
        }
      });
  });
}

export function typeIfElementNotComplete(elemento, texto) {
  cy.get(elemento).then(($elemento) => {
    if ($elemento.val()) {
      cy.log(elemento + ' tiene completo valor');
    } else {
      cy.log(elemento + ' está vacío, completo datos');
      tipear(elemento, texto);
    }
  });
}

export function selectIfElementNotComplete(elemento, texto) {
  cy.get(elemento).then(($ele) => {
    if ($ele.val()) {
      cy.log(elemento + ' tiene completo valor');
    } else {
      cy.log(elemento + ' está vacío, completo datos');
      cy.get(elemento).select(texto);
    }
  });
}

//no se sabe si la funcion es correcta porque no se implementó aun
export function completeRandomSelect(elemento) {
  cy.get(elemento).then(($opc) => {
    var cant = $opc.length;
    cy.log('Cantidad de sucursales: ' + cant);
    cy.get(elemento).select(getRandomInt(0, cant));
  });
}
/*
export function getUrl(){
  let url
  
  if(Cypress.env('ENV')==="development")
  {        
      url=properties.url_development,
      cy.log("url es: "+url)
  }    
  else if(Cypress.env('ENV')==="staging")
   {        
      url=properties.url_staging,
      cy.log("url es: "+url)
   }
   else if(Cypress.env('ENV')==="production")
   {        
      url=properties.url_production,
      cy.log("url es: "+url)
   }
   else (cy.log("ENVIRONMENT NO DEFINIDO"))
   
   return url
}

export function getUrlApi(){
  let url

  if(Cypress.env('ENV')==="development")
  {        
      url=properties.url_api_development,
      cy.log("API es: "+url)
  }    
  else if(Cypress.env('ENV')==="staging")
   {        
      url=properties.url_api_staging,
      cy.log("API es: "+url)
   }
   else if(Cypress.env('ENV')==="production")
   {        
      url=properties.url_api_production,
      cy.log("API es: "+url)
   }
   else (cy.log("ENVIRONMENT NO DEFINIDO"))
   
   return url
}*/

export function randomComboSelect(select, opciones) {
  //Selecciono valor aleatorio del combo a partir del texto obtenido
  cy.get(select)
    .find(opciones)
    .then(($options) => {
      const randomOption = $options.get(
        Math.floor(Math.random() * $options.length - 1)
      ); // se resta 1 para excluir la opción predeterminada "Seleccione Localidad"
      const text = Cypress.$(randomOption).text().trim();
      console.log('text' + text);
      cy.get(select).select(text);
    });
}

export function getSysDate() {
  var fechaActual = new Date();
  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, por eso se le suma 1
  var anio = fechaActual.getFullYear();

  // Agrega un cero delante si el día o el mes tienen un solo dígito
  if (dia < 10) {
    dia = '0' + dia;
  }
  if (mes < 10) {
    mes = '0' + mes;
  }
  var fechaFormateada = dia + '-' + mes + '-' + anio;
  return fechaFormateada; // Salida: "17-04-2023"
}

export function eliminarItems(body, elementosBuscados) {
  cy.get(body).then(($body) => {
    if ($body.find(elementosBuscados).length > 0) {
      cy.log('Hay items cargados, los borro');
      cy.get($body)
        .find(elementosBuscados) // Busca los elementos <button> con la clase específica
        .each(($button) => {
          // Itera sobre cada botón
          cy.wrap($button).contains('close').click(); // Hace clic en el botón
        });
    } else cy.log('No hay items cargados');
  });
}

//devuelve una cadena alfanumerica random de (i) cantidad de caracteres
export function randomAlphaNumeric(cant) {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < cant; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

//devuelve una cadena int random de (i) cantidad de caracteres, excluyo el cero porque generalmente lo uso para dni, tel, etc
export function randomInt(cant) {
  var text = '';
  var possible = '123456789';

  for (var i = 0; i < cant; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
