import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'room', component: RoomComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'book', component: BookComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'user', component: UserComponent },
    { path: 'usersignup', component: UsersignupComponent },
    { path: 'adminsignup', component: AdminsignupComponent },
    { path: 'adminstuff', component: AdminstuffComponent },
    { path: 'reporting', component: ReportingComponent },
    { path: 'housekeeping', component: HousekeepingComponent },
    { path: 'reporting2', component: Reporting2Component },
    { path: 'guest', component: GuestComponent },




];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);