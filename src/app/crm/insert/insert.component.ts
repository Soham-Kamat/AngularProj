import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  
  customer:any;
  constructor(private svc:CustomerService) { }

  ngOnInit(): void {
    
  }
  insert(){
    //this.svc.insert(this.customer);
    alert("customer added");
  }

}
