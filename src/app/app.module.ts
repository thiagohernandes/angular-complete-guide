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
import { ExBindInputChildComponent } from './pages/ex-bind-input-child/ex-bind-input-child.component';
import { ExBindInputRootComponent } from './pages/ex-bind-input-root/ex-bind-input-root.component';
import { ExPessoaService } from './services/ex-pessoa.service';
import { ExBindInputEmiterComponent } from './pages/ex-bind-input-emiter/ex-bind-input-emiter.component';
import { MasterListComponent } from './pages/master-list/master-list.component';
import { DetailListComponent } from './pages/detail-list/detail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExNgifElseComponent,
    ExNgStyleComponent,
    ExSelectLoadDataComponent,
    ExBindInputChildComponent,
    ExBindInputRootComponent,
    ExBindInputEmiterComponent,
    MasterListComponent,
    DetailListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ExPessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
