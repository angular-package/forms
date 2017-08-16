import { ModuleWithProviders,  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { elementRoutingRoutes } from './element-routing.routes';

export const ElementRoutingModule = RouterModule.forChild(elementRoutingRoutes);
