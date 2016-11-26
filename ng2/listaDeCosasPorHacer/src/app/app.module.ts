import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ElFormularioComponent } from './el-formulario/el-formulario.component';
import { LaListaComponent } from './la-lista/la-lista.component';
import { CuantoFaltaPipe } from './shared/pipes/cuanto-falta.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ElFormularioComponent,
    LaListaComponent,
    CuantoFaltaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
