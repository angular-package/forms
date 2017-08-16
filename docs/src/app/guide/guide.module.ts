// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

// internal
import { GuideComponent } from './guide.component';

import { GuideRoutingModule } from './routing/guide-routing.module';

@NgModule({
  declarations: [
    GuideComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

    GuideRoutingModule
  ],
  exports: [],
  providers: [],
})
export class GuideModule {}
