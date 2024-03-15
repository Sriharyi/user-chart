import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  chart: Chart<"pie", number[], string> | null = null;

  labels: string[] = [];
  data: number[] = [];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getRegistrationByState().subscribe((data) => {
      data.forEach((item) => {
        this.labels.push(item.state);
        this.data.push(item.count);
      });
      this.createChart();
    });
  }

  createChart(){
    if(this.chart){
      this.chart.destroy();
    }
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'State',
            data: this.data,
          }
        ],
      },
    });
  }

}
