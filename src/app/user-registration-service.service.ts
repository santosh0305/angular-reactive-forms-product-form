import { Injectable } from '@angular/core';

@Injectable()
export class UserRegistrationServiceService {

  constructor() { }

  registerUser(data: any){
    // Do http post call
    console.log('User Registration Form Details :',data);
  }
}