// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @ngx
import { DocsMaterialModule } from '@ngx-docs/material';
import { FormElementModule } from '@ngx-form/element';
import { FormMaterialModule } from '@ngx-form/material';
import { PrismModule } from '@ngx-prism/core';

// internal
import { ElementRoutingModule } from './element-routing.module';
import { DocsElementComponent } from './element.component';
import { UiModule } from './../../ui/ui.module';

// internal ./input
import { ElementInputComponent } from './input/input.component';

/**
 * @export
 * @class DocsElementModule
 */
@NgModule({
  declarations: [
    DocsElementComponent,

    // element
    ElementInputComponent
  ],
  imports: [
    // @angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // @ngx
    DocsMaterialModule,
    FormElementModule.forRoot(),
    FormMaterialModule,
    PrismModule,

    // internal
    ElementRoutingModule,
    UiModule
  ],
  providers: [],
})
export class DocsElementModule {}
