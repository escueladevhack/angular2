/*
/* Types
*/
// // String
// let characters: string;
// // Number
// let quantity: number = 5523;
// //  Array
// let arr: any[] = [false, "sss", 123];
// console.log(arr);
// let arr2: Array<boolean>;
// arr2 = [false, false, false, true];
// console.log(arr2);
// let arr3: [number] = [8008135,5,55];
// console.log(arr3);
// let arr4: [boolean, string] = [true, "something"];
// console.log(arr4);
// Enum
// enum langs {javaScript, python, erlang}
// let a = langs.javaScript;
// let b = langs[2];
// console.log(a);
// console.log(b);
// // Void
// function sum(): void {
//     let r = 7+7
//     return r;
// }
/*
/* Interfaces
*/
// interface IPlant {
//     height?: number;
//     fruit: string;
//     exudate: boolean;
//     //[otherStuff: string]: any;
// }
// function createPlant(taxonomy: IPlant): { isPalm: boolean } {
//     console.log(taxonomy);
//     return {isPalm: false};
// }
// let thePlant = createPlant({ height: 59, fruit: "berry", exudate: false, DBH: 35 }  as IPlant );
// console.log(thePlant);
// // // --------------------
// let obj: IPlant = {
//   height: 4,
//   fruit: "nut",
//   exudate: true,
//   oo: "ff"
// }
// console.log(obj);
// // --------------------
// Extending them
// interface Organism {
//     animal: boolean;
// }
// interface Animal {
//     mamal: boolean;
// }
// interface Doge extends Organism, Animal {
//     wow: boolean,
//     color: string
// }
// let theMeme = <Doge>{} ;
// theMeme.animal = true;
// theMeme.mamal = true;
// theMeme.wow = true;
// theMeme.color = "yellow";
// console.log(theMeme);
// // // --------------------
// // On Functions
// interface Wow {
//     (dogeType: string, wowQuantity: number): boolean;
// }
// let isItWow: Wow;
// isItWow = (dogeType, wowQuantity) =>  wowQuantity > 0 ? true : false;
// console.log(isItWow("regular", 0));
/*
/* Classes
*/
// class Camera {
//     brand: string;
//     model: string;
//     private fullName: string;
//     constructor(theBrand: string, theModel: string, protected color?: string) {
//       this.brand = theBrand;
//       this.model = theModel;
//       this.fullName = `${theBrand}, model ${theModel}`;
//     }
//     // Protected members
//     protected shoot(quantity: number = 0) {
//         return `${this.brand} ${this.model} took ${quantity} pictures!`;
//     }
// }
// class Dslr extends Camera {
//     quality: string;
//     constructor(brand: string, model: string, quality?: string, color?: string) {
//       super(brand, model, color);
//       this.quality = quality || 'just fine';
//       // Private member
//       console.log(this.color);
//       // Protected member
//       console.log(this.fullName);
//     }
//     takePictures(howMany: number) {
//         console.log(super.shoot(howMany) + `And they look ${this.quality}`)
//     }
// }
// let myCamera = new Dslr('Canon', '350D', 'nice', 'green');
// myCamera.takePictures(8);
// let otherCamera = new Dslr('Nikon', 'D1');
// otherCamera.takePictures(2);
// Getters & setters
// class Drink {
//     private drinkName: string;
//     get (): string {
//         return this.drinkName;
//     }
//     set (newDrink: string): void {
//         this.drinkName = newDrink;
//     }
// }
// let favoriteDrink = new Drink();
// favoriteDrink.set("Maguila");
// console.log(favoriteDrink.get());
/*
/* Static Properties
/*
/* - Only available through the class name
*/
// class Life {
//     static answerToLifeTheUniverseAndEverything = 42;
//     protected possibleAnswers = ['god', 'reproduce', 'be happy'];
//     constructor(protected additionalAnswers?: [string]){
//     }
//     protected getRandomAnswer() {
//       return this.possibleAnswers.concat(this.additionalAnswers);
//     }
// }
// class MyLife extends Life {
//   constructor(myAnswers: [string]){
//     super(myAnswers);
//   }
//   getAnswer() {
//     console.log('The answer to my life is:', super.getRandomAnswer());
//   }
//   getRealAnswer () {
//     return Life.answerToLifeTheUniverseAndEverything;
//   }
// }
// let lifeInGeneral = new Life();
// // Can't access it from the instance
// console.log(lifeInGeneral.answerToLifeTheUniverseAndEverything);
// // But you CAN access it from the class 
// console.info(Life.answerToLifeTheUniverseAndEverything);
// let me = new MyLife(['code', 'beer']);
// me.getAnswer();
/*
/* Abstract classes
/*
/* - Like Interfaces but for classes. Cannot be instatiated.
*/
// abstract class cellphone {
//   constructor(public ownTelephoneNumber: number){}
//   makeCall() {
//     return `${this.ownTelephoneNumber} is calling`;
//   }
//   sendMessage(){
//     return `${this.ownTelephoneNumber} is sending a message`; 
//   }
//   abstract takePic(): void;
// }
// class WindowsPhone extends cellphone {
//   constructor(myNumber: number){
//     super(myNumber);
//   }
//   callThis(number: number){
//     console.log(`${super.makeCall()} ${number}`);
//   }
//   messageThis(number: number){
//     console.log(`${super.sendMessage()} to ${number}`);
//   }
//   playGame() {
//     console.log('Yayy!!! so much fun!');
//   }
//   takePicture(){
//     console.log('Just tooka a picture!');
//   }
// }
// let myWp = new cellphone(123456);
// let myPhone = new WindowsPhone(3101112131415);
// myPhone.callThis(5555);
// myPhone.messageThis(5555);
// myPhone.playGame();
// myPhone.takePicture();
/*
/* TypeScript Declaration Files
/*
/* - For the intellisense
*/
/* La siguiente línea
/* /// <reference path="./definitions/thirtParty_lib.d.ts" /> */
// let s = new $$$.pokemon({name: "Undefined isnota functiomón", lvl:4, sound: "grrr", type: "bug"});
// console.log(s.makeTalk());
// s.giveBerry()
// let pokeAlgo = new $$$.pokemon({name: "algomon", type: "bla", lvl: 9, sound: "heyyy"}) 
// /*
/* TypeScript code documentation
/*
/* - Automated documentation
/* - We will be documenting the following class with
/*   Typedoc: $ sudo npm i -g typedoc
/*   more info: http://typedoc.io/
/*   to run it: $ typedoc demos.ts --out ./documentation
*/
// class esita {
//   private thing: number = 42;
//   constructor(name: string, description?: string, length?: number){}
//   get(){
//      return this.thing || 23;
//   }
//   set(value: number){
//     this.thing = value;
//   }
//   sum(a:number, b: string){
//     return a+b;
//   }
// }
// class aGuy {
//   constructor(public name: string){};
//   tt() {
//     console.log(888)
//   }
// }
// class p extends aGuy {
//   name: string
//   constructor(a:any){
//     super("tal");
//   }
// }
// let a =new p({"name": "f"})
// a.tt() 
