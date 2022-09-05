import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() count:number|undefined;
   //event
   @Output() update=new EventEmitter();
   

  decrement(){
    if(this.count!=undefined){
      this.count--;
      this.update.emit({count:this.count});
    }
  }
  increment(){
    if(this.count!=undefined){
      this.count++;
      this.update.emit({count:this.count});
    }
  }

 
  
}
