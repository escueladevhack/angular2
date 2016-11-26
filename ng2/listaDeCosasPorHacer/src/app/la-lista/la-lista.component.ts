import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-la-lista',
  templateUrl: './la-lista.component.html',
  styleUrls: ['./la-lista.component.css']
})
export class LaListaComponent implements OnInit {

  @Input() lasTareas;

  constructor() {
  }

  ngOnInit() {
  }

}
