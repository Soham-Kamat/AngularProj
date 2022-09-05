import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule ,Routes} from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { InsertComponent } from './insert/insert.component';



@NgModule({
  declarations: [
    CustomersComponent,
    ProfileComponent,
    UpdateComponent,
    InsertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    CustomersComponent,
    ProfileComponent,
    UpdateComponent,
    InsertComponent
  ]
})
export class CrmModule { }
