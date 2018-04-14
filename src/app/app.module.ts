import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

// ************* ngModel *************
import { FormsModule } from '@angular/forms'; 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { ExNgifElseComponent } from './pages/ex-ngif-else/ex-ngif-else.component';
import { ExNgStyleComponent } from './pages/ex-ng-style/ex-ng-style.component';
import { ExSelectLoadDataComponent } from './pages/ex-select-load-data/ex-select-load-data.component';


@NgModule({
  declarations: [
    AppComponent,
    ExNgifElseComponent,
    ExNgStyleComponent,
    ExSelectLoadDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
