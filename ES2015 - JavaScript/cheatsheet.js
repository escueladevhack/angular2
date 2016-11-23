// Cheatsheet
//-----------------

// Escribir en el DOM
var algo = document.createElement('div');
algo.innerHTML = 'hola!'
document.body.appendChild(algo);

// Funciones 'flecha'/arrow o lambda
//  Array.map, Array.forEach
//   Template strings ``
var datos = [4,8,15,16,23,42];

datos.map(numero => numero + 100).forEach(resultado => {
  const resultado_string = `el resultado es ${resultado}`;
  console.log(resultado_string);
  return resultado_string;
});

// Clases
class Room {
  constructor(number) {
    this.theNumber;
    this.bla = 'foobar';
    this.setNumber(number);
  }
  setNumber(number) {
    this.theNumber = number;
  }
  get() {
    return this.theNumber;
  }
}

var myInstance = new Room(77);
