import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminstuffComponent } from './adminstuff/adminstuff.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { ReportingComponent } from './reporting/reporting.component';
import { Reporting2Component } from './reporting2/reporting2.component';
import { GuestComponent } from './guest/guest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    AboutComponent,
    ContactComponent,
    BookComponent,
    AdminComponent,
    UserComponent,
    UsersignupComponent,
    AdminsignupComponent,
    AdminstuffComponent,
    HousekeepingComponent,
    ReportingComponent,
    Reporting2Component,
    GuestComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
