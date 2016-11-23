import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';

import { EmotionsService } from './shared/services/emotions.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    EmotionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
