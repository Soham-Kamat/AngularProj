import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  
  customer:any={
    // "id":undefined,
    // "name":undefined,
    // "contactNo":undefined,
    // "email":undefined
  };

  constructor(private svc:CustomerService) { }

  ngOnInit(): void {
  }
  insert(){
    console.log(this.customer)
    this.svc.insert(this.customer);
    console.log(this.svc.getAllData())
    alert("customer added");
  }

}
