import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from './../environments/environment';
import { OfficeComponent } from './office/office.component';
import { StaffComponent } from './staff/staff.component';
import { AddEditOfficeComponent } from './office/add-edit-office/add-edit-office.component';
import { ShowOfficeComponent } from './office/show-office/show-office.component';
import { AddEditStaffComponent } from './staff/add-edit-staff/add-edit-staff.component';
import { ShowStaffComponent } from './staff/show-staff/show-staff.component';
import { FilterStaffComponent } from './staff/filter-staff/filter-staff.component';
import{OfficeService} from'./shared/office.service';
import { StaffService } from './shared/staff.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{AngularFireModule} from'@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database/';
import{AngularFirestoreModule} from'@angular/fire/compat/firestore';
import { OfficeViewComponent } from './office/office-view/office-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfficeNavbarComponent } from './office/office-navbar/office-navbar.component';
import { NavComponent } from './nav/nav.component';
import { ColorPickerModule } from 'ngx-color-picker';
@NgModule({
  declarations: [
    AppComponent,
    OfficeComponent,
    StaffComponent,
    AddEditOfficeComponent,
    ShowOfficeComponent,
    AddEditStaffComponent,
    ShowStaffComponent,
    FilterStaffComponent,
    OfficeViewComponent,
    OfficeNavbarComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgbModule,
    ColorPickerModule
  ],
  providers: [OfficeService, StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
