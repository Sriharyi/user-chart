import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DayBarChartComponent } from './day-bar-chart/day-bar-chart.component';
import { GeoChartComponent } from './geo-chart/geo-chart.component';
import { GlobalChartComponent } from './global-chart/global-chart.component';
import { LoginLogComponent } from './login-log/login-log.component';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { LoginDensityComponent } from './login-density/login-density.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    PieChartComponent,
    DayBarChartComponent,
    GeoChartComponent,
    GlobalChartComponent,
    LoginLogComponent,
    LoginDensityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MapsModule,
    ButtonModule,
    MenubarModule,
    DropdownModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
