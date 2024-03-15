import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { UserRegistrationCountByState } from '../_models/user';
declare var google: any;

@Component({
  selector: 'app-geo-chart',
  templateUrl: './geo-chart.component.html',
  styleUrls: ['./geo-chart.component.css']
})
export class GeoChartComponent {

  constructor(private userService:UserService) { }

  ngOnInit() {
    google.charts.load('current', {
      'packages':['geochart'],
    
    });
    this.userService.getRegistrationByState().subscribe((data) => {
        if(data.length > 0){
          google.charts.setOnLoadCallback(() => this.drawRegionsMap(data));
        }
    });
  }

  drawRegionsMap(dataset: UserRegistrationCountByState[]) {

    console.log(dataset);
    const chartData = dataset.map((item)=>[item.state, item.count])
    //i need to create india density map for user registrations
    var data = google.visualization.arrayToDataTable([
      ['State', 'User Registrations'],
      ...chartData
    ]);

    var options = {
      region: 'IN',
      displayMode: 'regions',
      resolution: 'provinces',
      colorAxis: {colors: ['green', 'blue']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  } 
}
