import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  status:Boolean=true;
  id:any;
  customer:any;
  // Services are injected in constructor
  constructor(private _Activatedroute:ActivatedRoute,private svc:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.customer=this.svc.getById(this.id);
  }
  public deleteMyData(){
    let result=this.svc.remove(this.id);
    if(result!=-1){
      this.status=false;
      }
      alert("Profile Deleted");
    }

  public updateProf(){
    this.router.navigate(['/update',this.id]);
  }
    

}
