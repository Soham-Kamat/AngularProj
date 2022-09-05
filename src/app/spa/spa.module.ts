import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BarchartComponent } from './barchart/barchart.component';
import { AboutComponent } from './about/about.component';
import { RouterModule ,Routes} from '@angular/router';
import { CatalogueModule } from '../catalogue/catalogue.module';
import { ContactComponent } from './contact/contact.component';
import { ListsComponent } from '../catalogue/lists/lists.component';
import { LoginComponent } from '../membership/login/login.component';
import { FrameContainerComponent } from './frame-container/frame-container.component';
import { MembershipModule } from '../membership/membership.module';
import { DashboardComponent } from '../bi/dashboard/dashboard.component';
import { DonutChartComponent } from '../bi/donut-chart/donut-chart.component';
import { PieChartComponent } from '../bi/pie-chart/pie-chart.component';
import { BiModule } from '../bi/bi.module';
import { ProfileComponent } from '../crm/profile/profile.component';
import { CustomersComponent } from '../crm/customers/customers.component';
import { UpdateComponent } from '../crm/update/update.component';
import { CrmModule } from '../crm/crm.module';
import { InsertComponent } from '../crm/insert/insert.component';

export const childRoutes:Routes=[
  {path:'barChart',component:BarchartComponent},
  {path:'pieChart',component:PieChartComponent},
  {path:'donutChart',component:DonutChartComponent}
]

export const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'list',component:ListsComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:childRoutes},
  {path:'customers',component:CustomersComponent},
  {path:'customers/:id',component:ProfileComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'insert',component:InsertComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    BarchartComponent,
    AboutComponent,
    ContactComponent,
    FrameContainerComponent],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(childRoutes),
    CatalogueModule,
    MembershipModule,
    BiModule,
    CrmModule
  ],

  exports:[
    FrameContainerComponent
  ]
})

export class SpaModule { }
