// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// external @ngx
import { DocsMaterialModule } from '@ngx-docs/material';
import { NavigationModule } from '@ngx-ui/navigation';

// internal ../
import { configNavigation } from './../shared/navigation.config';

// internal
import { FooterComponent } from './footer/footer.component';
import { UiHeaderComponent } from './header/ui-header.component';

@NgModule({
  declarations: [
    FooterComponent,
    UiHeaderComponent
  ],
  imports: [
    CommonModule,
    DocsMaterialModule,
    FlexLayoutModule,
    MaterialModule,
    NavigationModule.forRoot(configNavigation)
  ],
  exports: [
    // modules
    DocsMaterialModule,
    FlexLayoutModule,
    MaterialModule,
    NavigationModule,

    // components
    FooterComponent,
    UiHeaderComponent
  ],
  providers: [],
})
export class UiModule {}
