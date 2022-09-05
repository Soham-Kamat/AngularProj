import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { 
  }
  auth:any={
    'email':'sohamkamat2000@gmail.com',
    'pass':'1234'
  }

  checkIfValid(username:string,pass:string){
    if(username==this.auth.email && pass==this.auth.pass){
      return true;
    }
    else{
      return false;
    }
  }
}
