import { BrowserModule } from '@angular/platform-browser';

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
import { UploadFormComponent } from './pages/upload-form/upload-form.component';
import { UploadService } from './services/upload.service';
import { HttpClientModule } from '@angular/common/http';
import { DownloadFormComponent } from './pages/download-form/download-form.component'; // Upload
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { LetrasComponent } from './pages/letras/letras.component';
import { HosthotComponent } from './pages/hosthot/hosthot.component';
import { ChangeBgColorDirective } from './directives/hosthot';
import { HoleDirective } from './directives/role';
import { RoleDirectiveComponent } from './pages/role-directive/role-directive.component';
import { ClassesComponent } from './classes/classes.component';

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
    UploadFormComponent,
    DownloadFormComponent,
    LetrasComponent,
    HosthotComponent,
    ChangeBgColorDirective,
    HoleDirective,
    RoleDirectiveComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule // Upload
  ],
  providers: [
    ExPessoaService,
    UploadService
  ],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
