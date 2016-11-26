import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-el-formulario',
  templateUrl: './el-formulario.component.html',
  styleUrls: ['./el-formulario.component.css']
})
export class ElFormularioComponent implements OnInit {
  elTexto: string;
  @Output() onAgregar = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  agregar(){
    if(this.elTexto) {
      this.onAgregar.emit(this.elTexto);
      this.elTexto = '';
    }
  }

}
