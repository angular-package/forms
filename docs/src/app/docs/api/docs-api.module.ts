// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { MarkdownModule } from '@ngx-markdown/core';

// internal
import { DocsApiRoutingModule } from './docs-api-routing.module';
import { DocsApiComponent } from './docs-api.component';

import { ApiInputComponent } from './input/api-input.component';
import { ApiInterfaceComponent } from './interface/api-interface.component';
import { ApiOutputComponent } from './output/api-output.component';
import { ApiTypeComponent } from './type/api-type.component';

import { UiModule } from './../../ui/ui.module';

@NgModule({
  declarations: [
    // docs/
    DocsApiComponent,

    // docs/api
    ApiInputComponent,
    ApiInterfaceComponent,
    ApiOutputComponent,
    ApiTypeComponent
  ],
  imports: [
    // external
    CommonModule,
    MaterialModule,

    // internal
    DocsApiRoutingModule,
    MarkdownModule,
    UiModule
  ],
  exports: [],
  providers: [],
})
export class DocsApiModule {}
