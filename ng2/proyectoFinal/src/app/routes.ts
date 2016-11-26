import { Routes, RouterModule } from '@angular/router';

import { ListGoalsComponent } from './list-goals/list-goals.component';

const routes: Routes = [
    {
        path: '',
        component: ListGoalsComponent
    }
];

export const Routing = RouterModule.forRoot(routes);