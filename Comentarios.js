//Mal hecho:

function hashIt(data) {
  // El hash
  let hash = 0;

  // Length of string
  const length = data.length;
  // Iterar cada caracter en la data
  for (let i = 0; i < length; i++) {
     // Conseguir el código del caracter
    const char = data.charCodeAt(i);
    // Crear el hash 
    hash = ((hash << 5) - hash) + char;
    // Conviertelo hasta 32-bit
    hash &= hash;
  }
}
//Bien hecho:

function hashIt1(data) {
  let hash = 0;
  const length = data.length;

  for (let i = 0; i < length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash &= hash;
  }
}

//Mal hecho:

function hazAlgo(){

}
// hazMasCosas();
// hazAunMasCosas();
// hazTantasOtrasCosas();
//Bien hecho:

function doStuff(){

}
//No escribir comentarios de jornada
//Mal hecho:

/**
 * 2016-12-20: Remover monads, no los entendia bien (RM)
 * 2016-10-01: Mejorar utilizando los monads especiales (JP)
 * 2016-02-03: Remover la comprobacion de tipos de data (LI)
 * 2015-03-14: Agregar la funcion combinar (JR)
 */
function combinar(a, b) {
    return a + b;
  }
//Bien hecho:
  
function combinar1(a, b) {
    return a + b;
  }

  //Evitar marcadores posicionales
  //Mal hecho:

////////////////////////////////////////////////////////////////////////////////
// Instanciacion del modelo de Scope
////////////////////////////////////////////////////////////////////////////////

  
  ////////////////////////////////////////////////////////////////////////////////
  // Iniciar de acciones 
  ////////////////////////////////////////////////////////////////////////////////
  var acciones = function() {
    // ...
  };
