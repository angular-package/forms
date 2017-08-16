// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { UiModule } from './../ui/ui.module';

// internal /docs
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { DocsStartComponent } from './start/docs-start.component';

/**
 * @export
 * @class DocsModule
 */
@NgModule({
  declarations: [
    DocsComponent,
    DocsStartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DocsRoutingModule,

    // internal
    UiModule
  ],
  exports: [],
  providers: [],
})
export class DocsModule {}
