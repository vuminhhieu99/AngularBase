import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeComponent } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveExampleDirective } from './shared/directives/directive-example.directive';
import { PageHeaderComponent } from './shared/modules/page-header/page-header.component';
import { PageSidebarComponent } from './shared/modules/page-sidebar/page-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveExampleDirective,
    PageSidebarComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
