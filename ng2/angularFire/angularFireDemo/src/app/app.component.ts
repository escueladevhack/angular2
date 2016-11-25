import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
    setTimeout(_ => {
      this.agregarCosa(Math.floor(Math.random()*10) + 'jajajsda')
    }, 3000)
  }

  agregarCosa(cosa){
    this.items.push(cosa);
  }
}
