import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule ,Routes} from '@angular/router';
import { routes } from '../membership/membership.module';



@NgModule({
  declarations: [
    BarChartComponent,
    PieChartComponent,
    DonutChartComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // PieChartComponent,
    // BarChartComponent,
    // DonutChartComponent,
    // DashboardComponent
  ]
})
export class BiModule { }
