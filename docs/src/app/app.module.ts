// external
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'hammerjs';

// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// UI
import { UiModule } from './ui/ui.module';

// guide
// import { GettingStartedComponent } from './guide/getting-started/getting-started.component';
// import { GuideComponent } from './guide/guide.component';

// guides
// import { GuidesComponent } from './guides/guides.component';
// import { GuidesMenuComponent } from './guides/guides-menu.component';

// docs
import { DocsModule } from './docs/docs.module';

// start
import { StartComponent } from './start/start.component';
// import { TypeComponent } from './type/type.component';

// Navigation
// import { NavigationModule } from '@ngx-ui/navigation';
// import { docsNavigation } from './shared/navigation.docs';

/**
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    StartComponent
  ],
  exports: [ ],
  imports: [
    // @angular
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,

    // internal
    AppRoutingModule,
    DocsModule,
    UiModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
