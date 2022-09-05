import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { windowWhen } from 'rxjs';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  constructor(private svc:ValidateService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }
  username:any;
  password:any;
  public redirect(){
    //
    if(this.username!=undefined && this.password!=undefined){
      if(this.svc.checkIfValid(this.username,this.password)){
        alert("Logged in")
        // console.log("logged in");
      }
      else{
        alert("Invalid credentials")
        // console.log("Invalid credentials")
      }
    }
    
  }
  onSubmit(f:NgForm){
    if(this.username!=undefined && this.password!=undefined){
      console.log(f.value);
      console.log(this.password)
      if(this.svc.checkIfValid(this.username,this.password)){
        alert("Logged in")
        // console.log("logged in");
      }
      else{
        alert("Invalid credentials")
        // console.log("Invalid credentials")
      }
    }
    
  }
}
