import { ModuleWithProviders,  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { docsApiRoutingRoutes } from './docs-api-routing.routes';

export const DocsApiRoutingModule = RouterModule.forChild(docsApiRoutingRoutes);
