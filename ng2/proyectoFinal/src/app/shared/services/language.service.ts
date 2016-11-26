import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {

  language: string;

  constructor() { }

  get(){
    if ( ! this.language ) {
      this.language = navigator.language.substring(0,2);
    } 
    
    return this.language;
  }

  set(language: string) {
    this.language = language;
  }

}
