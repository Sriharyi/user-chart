import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DayBarChartComponent } from './day-bar-chart/day-bar-chart.component';
import { GeoChartComponent } from './geo-chart/geo-chart.component';
import { GlobalChartComponent } from './global-chart/global-chart.component';
import { LoginLogComponent } from './login-log/login-log.component';
import { LoginDensityComponent } from './login-density/login-density.component';

const routes: Routes = [
  {
    path: 'bar-chart',
    component: BarChartComponent,
  },
  {
    path: 'pie-chart',
    component: PieChartComponent
  },{
    path: 'day-bar-chart',
    component: DayBarChartComponent
  },{
    path:"geo-chart",
    component:GeoChartComponent
  },{
    path:"global-chart",
    component:GlobalChartComponent
  },{
    path: "login-log",
    component:LoginLogComponent
  },{
    path:"login-density",
    component: LoginDensityComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
