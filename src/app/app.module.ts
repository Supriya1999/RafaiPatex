import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './views/customer-login/customer-login.component';
import { CustomerSignInComponent } from './views/customer-sign-in/customer-sign-in.component';
import { AgGridModule } from 'ag-grid-angular';

import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { LayoutComponent } from './template/layout/layout.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OtpComponent } from './views/otp/otp.component';
import { SharedModule } from './shared/shared.module';
import { EmployeeLoginComponent } from './views/employee-login/employee-login.component';
import { HttpClientModule } from '@angular/common/http';

import {  AutocompleteLibModule } from 'angular-ng-autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

//import { NgOtpInputComponent, NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  declarations: [
    AppComponent,
    
    CustomerLoginComponent,
    OtpComponent,
    CustomerSignInComponent,
  
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    SidebarComponent,
    EmployeeLoginComponent
    // BookingModule,
    // ShipmentModule
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    AgGridModule.withComponents([]),
    AutocompleteLibModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
    //NgOtpInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
