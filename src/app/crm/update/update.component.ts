import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})


export class UpdateComponent implements OnInit {
  urlString:string=window.location.href;
  id:any=parseInt(this.urlString.split("customers/")[1]);
  customer:any={};
  

  constructor(private Active_route:ActivatedRoute,private svc:CustomerService) { }



  ngOnInit(): void {
    console.log(this.Active_route);
    this.id=this.Active_route.snapshot.paramMap.get("id");
    this.customer=this.svc.getById(this.id);
  }

  updateProfile(){
    this.svc.update(this.id,this.customer);
  }

}
