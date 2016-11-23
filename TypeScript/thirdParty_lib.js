function pesoPesosPesos () {
  
  this.cosa = false;

  this.significadoDelUniversoLaVidaYTodo = 42;

  this.getAlgo = _ => "algo";

  this.mayusculizar = input => {
    if(typeof input !== 'string'){
      return input;
    }

    return input.toUpperCase();
  }

  this.pokemon = function(pokeObj){
    if(!pokeObj || !pokeObj.name || !pokeObj.sound || !pokeObj.lvl || !pokeObj.type){
      throw "error: missing pokemon constructor object or malformed.";
    }

    let berriesEaten = 0;

    Object.keys(pokeObj).forEach(e => {
      this[e] = pokeObj[e];
    });

    this.makeTalk = speech => `${this.name} dice ${speech || '... nada'}`;

    this.makeSound = _ => this.sound;

    this.lvlUp = lvl => {
      if(lvl <= this.lvl){
        return `The level of ${this.name} remained the same, ${this.lvl}`;
      }

      lvl ? this.lvl = lvl : this.lvl += 1;

      return `${this.name} leveled up to lvl ${this.lvl}!`;
    }

    this.giveBerry = _ => {
      berriesEaten += 1;
      
      console.log(`${this.name} ate a berry!`);

      if(berriesEaten % 5 === 0){
        console.log(this.lvlUp());
      }
    }
  }

}

let $$$ = new pesoPesosPesos();