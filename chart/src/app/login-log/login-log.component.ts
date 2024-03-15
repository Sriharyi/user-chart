import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { LoginService } from '../_services/login.service';
import { LoginLog } from '../_models/login';

@Component({
  selector: 'app-login-log',
  templateUrl: './login-log.component.html',
  styleUrls: ['./login-log.component.css']
})
export class LoginLogComponent {

    chart : Chart | null = null;

    constructor(private loginService:LoginService) { }

    logDate: Date = new Date();
    ngOnInit():void {
      this.logDate = new Date(2024,2,14);
      this.logDate.setMinutes(this.logDate.getMinutes() - this.logDate.getTimezoneOffset());
      this.loginService.getLoginLog(this.logDate).subscribe({
        next: (response) => {
         console.log(response);
          this.createChart(response);
        
        }
      });
    }

    createChart(response: LoginLog[]) { 
      if (this.chart) {
        this.chart.destroy();
      }

      let data = Array(24).fill(0);

      for (let key in response) {
        data[parseInt(key)] = response[key];
      }



      // i need login log based on the hour of the day for 24 hours
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
          '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'],
          datasets: [
            {
              label: 'Login Log',
              data: data,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        },
       
      });
    }
}
