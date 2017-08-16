import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutingRoutes } from './app-routing.routes';

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutingRoutes, { useHash: false });
