//Mal hecho
const yyyymmdstr = moment().format('YYYY/MM/DD');

//Bien hecho
const fechaActual = moment().format('YYYY/MM/DD');

//Mal hecho:

conseguirInfoUsuario();
conseguirDataDelCliente();
conseguirRecordDelCliente();

//Bien hecho:
conseguirUsuario();

//Mal hecho:
// Para qué rayos sirve 86400000? 
setTimeout(hastaLaInfinidadYMasAlla, 86400000);
//Bien hecho:
// Decláralos como variables globales de 'const'.
const MILISEGUNDOS_EN_UN_DIA = 8640000;

setTimeout(hastaLaInfinidadYMasAlla, MILISEGUNDOS_EN_UN_DIA);

//Mal hecho:

var direccion = 'One Infinite Loop, Cupertino 95014';
var codigoPostalRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(direccion.match(codigoPostalRegex)[1], direccion.match(codigoPostalRegex)[2]);
//Bien hecho:

const direccion = 'One Infinite Loop, Cupertino 95014';
const codigoPostalRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, ciudad, codigoPostal] = direccion.match(codigoPostalRegex) || [];
guardarcodigoPostal(ciudad, codigoPostal);

//Mal hecho:

var ubicaciones = ['Austin', 'New York', 'San Francisco'];
ubicaciones.forEach((u) => {
  hazUnaCosa();
  hasMasCosas()
  // ...
  // ...
  // ...
  // Espera, para qué existe la 'u'?
  ejecuta(u);
});
//Bien hecho:

var ubicaciones = ['Austin', 'New York', 'San Francisco'];
ubicaciones.forEach((ubicacion) => {
  hazUnaCosa();
  hazMasCosas()
  // ...
  // ...
  // ...
  ejecuta(ubicacion);
});

//Mal hecho:

var Coche = {
  cocheMarca: 'Honda',
  cocheModelo: 'Accord',
  cocheColor: 'Blue'
};

function pintarCoche(coche) {
  coche.cocheColor = 'Red';
}
//Bien hecho:

var Coche = {
  marca: 'Honda',
  modelo: 'Accord',
  color: 'Blue'
};

function pintarCoche(coche) {
  coche.color = 'Red';
}

//Mal hecho:

function crearMicroCerveceria(nombre) {
  const nombreDelMicroCerveceria = nombre || 'Hipster Brew Co.';
  // ...
}
//Bien hecho:

function crearMicroCerveceria(nombreDelMicroCerveceria = 'Hipster Brew Co.') {
  // ...
}