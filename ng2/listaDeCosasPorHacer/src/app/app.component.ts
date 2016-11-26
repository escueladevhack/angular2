import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaDeTareas: any[] = [];
  constructor(){}

  nuevoElemento(textoDeLaTarea) {
    this.listaDeTareas.push({label: textoDeLaTarea, completada: false});
  }

}