import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './routes';
import { MaterialModule } from '@angular/material';

import { GoalsService } from './shared/services/goals.service';
import { LanguageService } from './shared/services/language.service';

import { AppComponent } from './app.component';
import { ListGoalsComponent } from './list-goals/list-goals.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { TranslatePipe } from './shared/pipes/translate.pipe';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGoalsComponent,
    GoalFormComponent,
    TranslatePipe,
    LanguageSwitcherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    MaterialModule.forRoot()
  ],
  providers: [
    GoalsService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
