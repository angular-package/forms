import { ModuleWithProviders,  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { docsRoutingRoutes } from './docs-routing.routes';

export const DocsRoutingModule = RouterModule.forChild(docsRoutingRoutes);
