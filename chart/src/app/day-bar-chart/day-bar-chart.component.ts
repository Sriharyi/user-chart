import { Component } from '@angular/core';
import { MONTHS, YEARS } from '../_helpers/constant';
import { Chart } from 'chart.js';
import { UserService } from '../_services/user.service';
import { UserRegistrationCountByDay } from '../_models/user';

@Component({
  selector: 'app-day-bar-chart',
  templateUrl: './day-bar-chart.component.html',
  styleUrls: ['./day-bar-chart.component.css']
})
export class DayBarChartComponent {
  year: number =  2023;
  month: number = 1;
  readonly MONTHS = MONTHS;
  chart: Chart  | null = null;
  readonly YEARS: number[] =  YEARS;

  labels: string[] = [];
  data: number[] = [];


constructor(private userService:UserService) { }

ngOnInit() {
  this.getMonthData();
}
getMonthData() {
      this.userService.getRegistrationsByDay(this.year, this.month).subscribe({
        next: (response:UserRegistrationCountByDay[]) => {
            this.data = response.map((d) => d.count);
            this.labels = response.map((d) => `${d.day}-${this.month}-${this.year}`);
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
        }
      });
}

}
