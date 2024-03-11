import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  chart: any = [];

  ngOnInit() {

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const data = [50, 75, 150, 100, 200, 175, 80, 90, 100, 120, 130, 140]

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: '# of User Registrations',
            data: data,
          },
          {
            label: '# of User Logins',
            data: data,
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
  }
}
