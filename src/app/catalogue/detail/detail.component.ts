import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // @Input()  id:number=0;
  // @Input()  title:string|undefined;
  // @Input()  description:string|undefined;
  // @Input()  unitPrice:number=0;
  // @Input()  imageUrl:string|undefined;
  // @Input()  likes:number=0;
  
  constructor() { }
  @Input()product :any;
  ngOnInit(): void {
    
    // this.id=12;
    // this.title="Gulab Jamun";
    // this.description="Dessert";
    // this.unitPrice=12;
    // this.imageUrl="../assets/images/GulabJamun.jpeg"
    // this.likes=0;
  }

  onUpdate(eventArgs:any){
    this.product.likes=eventArgs.count; 
  }
  
}
