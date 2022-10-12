//Controlar Errores
//Mal hecho:

try {
  functionThatMightThrow();
} catch (error) {
  console.log(error);
}
//Bien hecho:

try {
  functionThatMightThrow();
} catch (error) {
  // One option (more noisy than console.log):
  console.error(error);
  // Another option:
  notifyUserOfError(error);
  // Another option:
  reportErrorToService(error);
  // OR do all three!
}

//No ignorar partes de código que pueden generar errores
//Mal hecho:
getdata()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
    console.log(error);
  });
//Bien hecho:

getdata()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
     // Una opción (más ruidoso que console.log):
    console.error(error);
    // Otra opción:
    notifyUserOfError(error);
    // Otra opción
    reportErrorToService(error);
    // O haz las tres!
  });