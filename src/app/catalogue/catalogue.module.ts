import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { InsertComponent } from './insert/insert.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListsComponent,
    InsertComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    ListsComponent
  ]
})
export class CatalogueModule { }
