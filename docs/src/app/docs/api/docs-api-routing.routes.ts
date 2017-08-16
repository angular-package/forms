import { Routes } from '@angular/router';

// internal
import { DocsApiComponent } from './docs-api.component';
import { ApiInputComponent } from './input/api-input.component';
import { ApiInterfaceComponent } from './interface/api-interface.component';
import { ApiOutputComponent } from './output/api-output.component';
import { ApiTypeComponent } from './type/api-type.component';

export const docsApiRoutingRoutes: Routes = [
  {
    path: '',
    component: DocsApiComponent,
    children: [
      // { path: '', component: DocsStartComponent },
      { path: 'input', component: ApiInputComponent },
      { path: 'interface', component: ApiInterfaceComponent },
      { path: 'output', component: ApiOutputComponent },
      { path: 'type', component: ApiTypeComponent }
    ]
  }
];
