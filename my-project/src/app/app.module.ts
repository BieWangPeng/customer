import { RouterModule, Routes} from "@angular/router";

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule} from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/common/nav/nav.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { FileUploader, FileDropDirective, FileSelectDirective } from 'ng2-file-upload';

import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule ,FormBuilder} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


const appRoutes=[
  {path:"header",component:NavComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CustomerComponent,
    FileDropDirective,
    FileSelectDirective,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFontAwesomeModule,
    JsonpModule,
    HttpClientModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
