import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  SuperHeroes:any;
  constructor(private svc:ProductsService) { }
  

  ngOnInit(): void {
    this.SuperHeroes=this.svc.getAll();
  }

}
