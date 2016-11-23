import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const Routing = RouterModule.forRoot(routes);
