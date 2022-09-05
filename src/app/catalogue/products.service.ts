import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 SuperHeroes:any=[
  {
    id:56,
    title:'Iron Man',
    imageUrl:'/assets/images/marvel/IronMan.jfif',
    description:'The Boss',
    likes:2300
  },

  {
    id:58,
    title:'Captain America',
    imageUrl:'/assets/images/marvel/CaptainAmerica.jfif',
    description:'The Boss',
    likes:1200
  }

 ]
  
  constructor() { }
  getAll(){
    return this.SuperHeroes;
  }
}
