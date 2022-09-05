import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customer:any=[]
  status:Boolean=false;
  status_details:Boolean=false;
  
  constructor(private svc:CustomerService) { }

  ngOnInit(): void {
    this.customer=this.svc.getAllData();
  }
  onShow(){
    this.status=true;
  }
  onHide(){
    this.status=false;
  }
  showDetails(){
    this.status_details=true;
  }
  
}
