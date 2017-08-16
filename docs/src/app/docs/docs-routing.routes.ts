import { Routes } from '@angular/router';

import { DocsComponent } from './docs.component';
import { DocsStartComponent } from './start/docs-start.component';

export const docsRoutingRoutes: Routes = [
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      { path: '', component: DocsStartComponent },
      { path: 'api', loadChildren: 'app/docs/api/docs-api.module#DocsApiModule' },
      { path: 'element', loadChildren: 'app/docs/element/element.module#DocsElementModule' },
    ]
  }
];
