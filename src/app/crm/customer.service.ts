import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  found:any;
  customers=[
    {
      "id":1,
      "name":"SohamKamat",
      "contactNo":9766855174,
      "email":"sohamkamat2000@gmail.com",
    },
    {
      "id":2,
      "name":"Dhananjay Joshi",
      "contactNo":9766855174,
      "email":"sohamkamat2000@gmail.com",
    },
    {
      "id":3,
      "name":"Maithili Patil",
      "contactNo":9766855174,
      "email":"sohamkamat2000@gmail.com",
    }
  ]

  public getAllData():any{
    return this.customers
  }
  public insert(customer:any):any{
    this.customers.push(customer)
  }
  public getById (id:number){
    this.found=this.customers.find(customer=>(customer.id==id));
    return this.found;
  }
  public remove(id:number):number{
    let reqId= this.customers.findIndex(customer=>(customer.id==id))
    if(reqId==-1) return reqId;
    this.customers.splice(reqId,1);
    return reqId;
  }
  
  update(id:number,customer:any){
    let index=this.getById(id);
    this.customers[index]=customer;
  }

}
