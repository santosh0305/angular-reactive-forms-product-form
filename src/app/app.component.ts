import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';
import { UserRegistrationServiceService } from './user-registration-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private userRegSvc : UserRegistrationServiceService){

  }
  registrationForm = new FormGroup({
    'FirstName': new FormControl('',Validators.required),
    'LastName': new FormControl('',Validators.minLength(5)),
    'Password': new FormControl('',Validators.required),
    'Email': new FormControl('',Validators.email),
    'PhoneNumber': new FormControl('',Validators.email),
  });  

  RegisterUser(){
    //console.log(this.registrationForm.controls['FirstName']);
    
    //console.log(this.registrationForm);

    if(this.registrationForm.valid){
      // Save to DB;
      console.log('1. Send Data to Service Layer : ',this.registrationForm);
      this.userRegSvc.registerUser(this.registrationForm.value);
      console.log('2. After Service Call : ',this.registrationForm);
      console.log(this.registrationForm.value);
    }
    else{
      console.error('Unable to save !!');
    }
    
  }
}
