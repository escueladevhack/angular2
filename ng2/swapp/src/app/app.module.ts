import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { CharacterComponent } from './character/character.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { DataService } from './shared/services/data.service';
import { CharacterListComponent } from './character-list/character-list.component';

import { Routing } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    CharacterComponent,
    NavbarComponent,
    FooterComponent,
    CharacterListComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
