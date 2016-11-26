import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.languageService.set(language);
  }
}
