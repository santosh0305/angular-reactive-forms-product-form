import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

registrationForm = new FormGroup({
  'FirstName': new FormControl('please enter firstname',Validators.required),
  'LastName': new FormControl('please enter lastname',null),
  'Password': new FormControl('please enter password',null),
  'Email': new FormControl('please enter email',Validators.email),
  'PhoneNumber': new FormControl('please enter phone',Validators.email),
});  


}
