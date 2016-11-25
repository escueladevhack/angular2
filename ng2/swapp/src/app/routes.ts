import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {CharacterComponent} from './character/character.component';
import {CharacterListComponent} from './character-list/character-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'character-list',
    component: CharacterListComponent
  },
  {
    path: 'character/:id',
    component: CharacterComponent,
    
  }
];

export const Routing = RouterModule.forRoot(routes);
