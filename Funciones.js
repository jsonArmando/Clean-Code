//Mal hecho:

function crearMenu(titulo, contexto, textoDelBoton, cancelable) {
  // ...
}
//Bien hecho:

function crearMenu({ titulo, contexto, textoDelBoton, cancelable }) {
  // ...
}

crearMenu({
  titulo: 'Foo',
  contexto: 'Bar',
  textoDelBoton: 'Baz',
  cancelable: true
});


//Mal hecho:

function escribirClientes(clients) {
  clientes.forEach((cliente) => {
    const recordDelCliente = database.busca(cliente);
    if (recordDelCliente.esActivo()) {
      escribir(cliente);
    }
  });
}
//Bien hecho:

function escribirClientes(clientes) {
  clientes
    .filter(esActivoElCliente)
    .forEach(email);
}

function esActivoElCliente(cliente) {
  const recordDelCliente = database.busca(cliente);
  return recordDelCliente.esActivo();
}

//Mal hecho:

function adelantarLaFechaPorUnDia(fecha, mes) {
  // ...
}

var fecha = new Date();
// Es difícil entender del nombre lo que hace la función 
adelantarLaFechaPorUnDia(fecha, 1);
//Bien hecho:

function agregarMesAlDia(mes, fecha) {
  // ...
}

const fecha = new Date();
agregarMesAlDia(1, fecha);

//Mal hecho:

function parseBetterJSAlternative(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      // ...
    });
  });

  const ast = [];
  tokens.forEach((token) => {
    // lex...
  });

  ast.forEach((node) => {
    // parse...
  });
}
//Bien hecho:

function tokenize(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      tokens.push( /* ... */ );
    });
  });

  return tokens;
}

function lexer(tokens) {
  const ast = [];
  tokens.forEach((token) => {
    ast.push( /* ... */ );
  });

  return ast;
}

function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const ast = lexer(tokens);
  ast.forEach((node) => {
    // parse...
  });
}


//Mal hecho:

function showDeveloperList(developers) {
  developers.forEach((developer) => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink
    };

    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio
    };

    render(data);
  });
}
//Bien hecho:

function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    let portfolio = employee.getGithubLink();

    if (employee.type === 'manager') {
      portfolio = employee.getMBAProjects();
    }

    const data = {
      expectedSalary,
      experience,
      portfolio
    };

    render(data);
  });
}

//Mal hecho:

var menuConfig = {
  title: null,
  body: 'Bar',
  buttonText: null,
  cancellable: true
};

function createMenu(config) {
  config.title = config.title || 'Foo';
  config.body = config.body || 'Bar';
  config.buttonText = config.buttonText || 'Baz';
  config.cancellable = config.cancellable === undefined ? config.cancellable : true;
}

createMenu(menuConfig);
//Bien hecho:

var menuConfig = {
  title: 'Order',
  // El usuario no tenía la clave 'body'
  buttonText: 'Send',
  cancellable: true
};

function createMenu(config) {
  config = Object.assign({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
  }, config);
  // el variable 'config' ahora iguala: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}

createMenu(menuConfig);
//No usar marcadores como parámetros de funciones
//Mal hecho:

function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}
//Bien hecho:

function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}

//Evitar que las funciones produzcan efectos extras
//Mal hecho:

// Global variable referenced by following function.
// If we had another function that used this name, now it'd be an array and it could break it.
var name = 'Ryan McDermott';

function splitIntoFirstAndLastName() {
  name = name.split(' ');
}

splitIntoFirstAndLastName();

console.log(name); // ['Ryan', 'McDermott'];
//Bien hecho:

function splitIntoFirstAndLastName(name) {
  return name.split(' ');
}

const name = 'Ryan McDermott';
const newName = splitIntoFirstAndLastName(name);

console.log(name); // 'Ryan McDermott';
console.log(newName); // ['Ryan', 'McDermott'];

//Mal hecho:

var addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};
//Bien hecho:

var addItemToCart = (cart, item) => {
  return [...cart, { item, date : Date.now() }];
};

//No cambiar las funciones globales
//Mal hecho:

Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
};
//Bien hecho:

class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
  }
}
//Programación funcional, en vez de programación imperativa
//Mal hecho:

var programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, {
    name: 'Suzie Q',
    linesOfCode: 1500
  }, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];

var totalOutput = 0;

for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}
//Bien hecho:

const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, {
    name: 'Suzie Q',
    linesOfCode: 1500
  }, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];

const INITIAL_VALUE = 0;

const totalOutput = programmerOutput
  .map((programmer) => programmer.linesOfCode)
  .reduce((acc, linesOfCode) => acc + linesOfCode, INITIAL_VALUE);

//Encapsular los condicionales

//Mal hecho:

if (fsm.state === 'fetching' && isEmpty(listNode)) {
  // ...
}
//Bien hecho:

function shouldShowSpinner(fsm, listNode) {
  return fsm.state === 'fetching' && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
//Evitar condicionales negativos
//Mal hecho:

function isDOMNodeNotPresent(node) {
  // ...
}

if (!isDOMNodeNotPresent(node)) {
  // ...
}
//Bien hecho:
function isDOMNodePresent(node) {
  // ...
}

if (isDOMNodePresent(node)) {
  // ...
}

//Evitar los condicionales
//Mal hecho:

class Airplane {
  // ...
  getCruisingAltitude() {
    switch (this.type) {
      case '777':
        return this.getMaxAltitude() - this.getPassengerCount();
      case 'Air Force One':
        return this.getMaxAltitude();
      case 'Cessna':
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}
//Bien hecho:

class Airplane {
  // ...
}

class Boeing777 extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
  }
}

class AirForceOne extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude();
  }
}

class Cessna extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}
//Evitar la comprobación de tipos
//Mal hecho:

function travelToTexas(vehicle) {
  if (vehicle instanceof Bicycle) {
    vehicle.pedal(this.currentLocation, new Location('texas'));
  } else if (vehicle instanceof Car) {
    vehicle.drive(this.currentLocation, new Location('texas'));
  }
}
//Bien hecho:

function travelToTexas(vehicle) {
  vehicle.move(this.currentLocation, new Location('texas'));
}

//Mal hecho:

function combine(val1, val2) {
    if (typeof val1 === 'number' && typeof val2 === 'number' ||
        typeof val1 === 'string' && typeof val2 === 'string') {
      return val1 + val2;
    }
  
    throw new Error('Must be of type String or Number');
  }
  //Bien hecho:
  
  function combine(val1, val2) {
    return val1 + val2;
  }

  //No optimizar demasiado
//Mal hecho:

// On old browsers, each iteration with uncached `list.length` would be costly
// because of `list.length` recomputation. In modern browsers, this is optimized.
for (let i = 0, len = list.length; i < len; i++) {
  // ...
}
//Bien hecho:

for (let i = 0; i < list.length; i++) {
  // ...
}

//Eliminar código muerto
//Mal hecho:

function oldRequestModule(url) {
  // ...
}

function newRequestModule(url) {
  // ...
}

var req = newRequestModule;
inventoryTracker('apples', req, 'www.inventory-awesome.io');
//Bien hecho:

function newRequestModule(url) {
  // ...
}

const req = newRequestModule;
inventoryTracker('apples', req, 'www.inventory-awesome.io');