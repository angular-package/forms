import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';

export const appRoutingRoutes: Routes = [
  { path: '', component: StartComponent }
];

/*
// external
import { Routes } from '@angular/router';

// DOCS
import { DocsComponent } from './docs/docs.component';
import { DocsElementComponent } from './docs/element/element.component';
import {
  DocsStartComponent,
  ElementInputComponent,
  ElementSelectComponent
} from './docs';

import { DocsApiComponent } from './docs/api/docs-api.component';
import { DocsApiInputComponent } from './docs/api/input/docs-api-input.component';
// import { DocsApiOutputComponent } from './docs/api/output/docs-api-output.component';
import { DocsApiInterfaceComponent } from './docs/api/interface/docs-api-interface.component';
// import { TypeComponent } from './docs/api/type/type.component';

// GUIDES
import { GuidesComponent } from './guides/guides.component';
import { GuidesMenuComponent } from './guides/guides-menu.component';

// GUIDE
import { GuideComponent } from './guide/guide.component';
import { GettingStartedComponent } from './guide/getting-started/getting-started.component';

// START
import { StartComponent } from './start/start.component';


export const rootRouterConfig: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'docs',
    component: DocsComponent,
    data: { name: 'docs' },
    children: [
      {
        path: '',
        component: DocsStartComponent,
        children: []
      },
      {
        path: 'api',
        component: DocsApiComponent,
        children: [
          { path: 'input', component: DocsApiInputComponent },
          // { path: 'output', component: DocsApiOutputComponent },
          { path: 'interface', component: DocsApiInterfaceComponent },
          // { path: 'type', component: DocsApiTypeComponent }
        ]
      },
      {
        path: 'element',
        component: DocsElementComponent,
        children: [
          { path: 'input', component: ElementInputComponent },
          { path: 'select', component: ElementSelectComponent }
        ]
      }
    ]
  },
  {
    path: 'guide',
    component: GuideComponent,
    children: [
      { path: 'getting-started', component:  GettingStartedComponent }
    ]
  },
  {
    path: 'guides',
    component: GuidesComponent,
    children: [
      { path: '', component:  GuidesMenuComponent }
    ]
  }
];

*/
