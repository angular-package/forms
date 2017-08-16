import { Routes } from '@angular/router';

import { DocsElementComponent } from './element.component';
import { ElementInputComponent } from './input/input.component';

export const elementRoutingRoutes: Routes = [
  {
    path: '',
    component: DocsElementComponent,
    children: [
      { path: 'input', component: ElementInputComponent },
    ]
  }
];
