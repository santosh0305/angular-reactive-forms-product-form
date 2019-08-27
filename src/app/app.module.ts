import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ViewRegisteredUsersComponent } from './view-registered-users/view-registered-users.component';
import { HeaderComponent } from './header/header.component';
import { UserRegistrationServiceService } from './user-registration-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, ViewRegisteredUsersComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserRegistrationServiceService]
})
export class AppModule { }
