import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'diego';
  rutas: any[] = [
    {
      label: 'home',
      path: '/'
    },
    {
      label: 'lista',
      path: 'character-list'
    },
    {
      label: 'about',
      path: 'about'
    },
  ]

  title = 'app works!';
}
