import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { guideRoutingRoutes } from './guide-routing.routes';

export const GuideRoutingModule: ModuleWithProviders = RouterModule.forChild(guideRoutingRoutes);
