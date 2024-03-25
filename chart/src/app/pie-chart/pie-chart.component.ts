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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getRegistrationByState().subscribe((data) => {
      data.forEach((item) => {
        this.labels.push(item.state);
        this.data.push(item.count);
      });
      this.createChart();
    });
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    const numDataPoints = this.data.length;
    const backgroundColor = this.generateColorArray(numDataPoints);

    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'State',
            data: this.data,
            backgroundColor: backgroundColor,
            hoverOffset: 4
          }
        ],
      },
    });
  }

  generateColorArray(numColors: number): string[] {
    const colors: string[] = [];

    // colors.push(`rgb()`)

    for (let i = 5; i < numColors; i++) {
      const red = Math.floor(Math.random() * 256)
      const green = Math.floor(Math.random() * 256)
      const blue = Math.floor(Math.random() * 256)
      colors.push(`rgb(${red},${green},${blue})`)
    }
    return colors;
  }

}
