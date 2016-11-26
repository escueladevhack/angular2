import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  dictionary = {
    Title: {
      en: 'Title',
      es: 'Titulo'
    },
    Hello: {
      en: 'Hello',
      es: 'Hola'
    }
  };

  constructor(public languageService: LanguageService){}

  transform(value: string, args?: any): string {
    let currentLanguage = this.languageService.get();
    return this.dictionary[value][currentLanguage];
  }

}
