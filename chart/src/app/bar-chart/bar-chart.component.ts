import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

import { UserService } from '../_services/user.service';
import { YEARS } from '../_helpers/constant';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  year: number = 2023;

  chart: Chart | null = null;
    
  readonly YEARS:number[] = YEARS;

  constructor(private userService: UserService) { }

  labels: string[] = [];
  data: number[] = [];
  ngOnInit() {
    this.getYearData();
  }


  getYearData() {
    this.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    this.userService.getRegistrations(this.year).subscribe((data) => {
      this.data = data.map((d) => d.count);
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: '# of User Registrations',
              data: this.data,
            } 
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });
  }

}
