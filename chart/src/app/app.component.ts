import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chart';
  items: MenuItem[] = [];

  ngOnInit(){
    this.items = [
      {
        label: 'Chart',
        items:[
            {
                label:"Month-Chart",
                routerLink:"bar-chart"
            },
            {
                label:"Day-Chart",
                routerLink:"day-bar-chart"
            },
            {
                label:"Login-Log",
                routerLink:"login-log"
            },{
                label:"Density-Global",
                routerLink:"global-chart"
            },{
                label:"Density-India",
                routerLink:"geo-chart"
            },{
                label:"State-Pie-Chart",
                routerLink:"pie-chart"
            },
        ]
      },
    
    ];
  }
}
