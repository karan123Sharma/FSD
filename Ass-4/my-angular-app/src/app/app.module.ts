import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    Template2Component,
    Template3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
