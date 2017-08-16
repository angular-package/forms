import { Routes } from '@angular/router';

import { GettingStartedComponent } from './../getting-started/getting-started.component';
import { GuideComponent } from './../guide.component';

export const guideRoutingRoutes: Routes = [
  {
    path: 'guide',
    component: GuideComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'getting-started', component:  GettingStartedComponent }
        ]
      }
    ]
  },

];
/*
export const guideRoutes: Routes = [
  {
    path: 'workspace',
    component: WorkspaceComponent,
    // canActivate: [ AuthGuardService ],
    children: [
      {
        path: '',
        // canActivateChild: [ AuthGuardService ],
        children: [
          { path: '', loadChildren: 'app/workspace/activity/activity.module#ActivityModule' },
          { path: '', loadChildren: 'app/workspace/calendar/calendar.module#CalendarModule' },
          { path: '', loadChildren: 'app/workspace/dashboard/dashboard.module#DashboardModule' },
          { path: '', loadChildren: 'app/workspace/settings/settings.module#SettingsModule' },
          { path: '', loadChildren: 'app/workspace/todo/todo.module#TodoModule' },
          { path: '', loadChildren: 'app/user/user.module#UserModule' }
        ]
      }
    ]
  }
];
*/
