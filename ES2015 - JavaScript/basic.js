// ----------
// var
//    vs.
//        let
// ----------------

// var pokebolas = 3;
// // let pokemon = 'Snorlax';

// if(pokebolas > 0) {
//   var pokemon = 'Snorlax';
//   capturar();
// }

// function capturar() {
//   console.log(pokemon + ' ha sido capturado!!!');
// }


// ----------
// const
// ----------------

// const ante = 'ojos';

// function cambiaCosa() {
//   ante = 'pasado'
// }

// cambiaCosa();

// // Para tener en cuenta
// const obj = {
//   nombre: 'o be jota',
//   forma: false
// }


// ----------
// Template literals
// ----------------

// const cosa1 = 'licuadora';
// const cosa2 = 'borojó';
// const resultado = 'jugo';

// const frase = `haciendo uso de algo llamado ${cosa1} y ${cosa2} se puede obtener ${resultado}`;

// console.log(frase);


// ----------
// Default parameter values
// ----------------

// function talCosa(nombre = 'fulano') {
//   console.log(`¡Hola ${nombre}!!`);
// }

// talCosa('yo');

// ----------
// Classes
// ----------------

// class Esita {
  
//   constructor(){
//     console.log('¡Oh! alguien me ha instanciado');
//   }

//   sumarDosCosas(a,b) {
//     return a+b;
//   }

//   guardarValor(algo) {
//     this.valor = algo;
//   }

//   devolverValor() {
//     return this.valor;
//   }
// }

// // // Cosas extra

// class Esota extends Esita{
//   constructor(color) {
//     super();
//     this.elColor = color;
//     console.log(`el color con que me han instanciado es ${color}`);
//   }
// }


// ----------
// Lambda/arrow functions
// ----------------

// function exclamador(parametro){
//   this.arr = ['Chrome','Firefox', 'Opera'];
//   this.adicion = parametro;

//   this.arr.map(function(elemento, index, array){
//     console.log(elemento + this.adicion);
//   });
// }

// let aceptable = new exclamador('!!!');

// // that = this

// function exclamador(parametro){
//   let that = this;
//   that.arr = ['Chrome','Firefox', 'Opera'];
//   that.adicion = parametro;

//   that.arr.map(function(elemento, index, array){
//     console.log(elemento + that.adicion);
//   });
// }

// // let excesivo = new exclamador('!!!!!¡!¡!¡!¡!!!!!¡!');

// // // arrows

// function exclamador(parametro){
//   this.arr = ['Chrome','Firefox', 'Opera'];
//   this.adicion = parametro;

//   this.arr.map((elemento, index, array) => {
//     console.log(elemento + this.adicion);
//   });
// }

// let aceptable = new exclamador('!!!');