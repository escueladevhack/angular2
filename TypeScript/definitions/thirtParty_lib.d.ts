declare let $$$: IPesosx3;

interface IPokeParams {
  name: string;
  sound: string;
  lvl: number;
  type: string
}

interface IPokemon {
  new (pokemon: IPokeParams): IPokeInstance
  (IPokeParams)
}

interface IPokeInstance {
  makeTalk(speech?: string): string;
  makeSound(): void;
  lvlUp(lvl?: number): string;
  giveBerry(): void;
}

interface IPesosx3 {
  cosa: boolean;
  significadoDelUniversoLaVidaYTodo: number;
  getAlgo(): string;
  mayusculizar(input:string): string;
  pokemon: IPokemon;
}
