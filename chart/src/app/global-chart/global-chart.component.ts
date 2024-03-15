import { Component } from '@angular/core';
import * as L from 'leaflet';
import { UserService } from '../_services/user.service';
import { MyLocation } from '../_models/user';

@Component({
  selector: 'app-global-chart',
  templateUrl: './global-chart.component.html',
  styleUrls: ['./global-chart.component.css']
})
export class GlobalChartComponent {
  map: any;

  location: MyLocation[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getRegistrationByGeo().subscribe({
      next: (locations) => {
        this.location = locations;
        console.log(this.location);
        this.initMap();
      }
    });
  }



  private initMap(): void {
    this.map = L.map('map', {
      center: [36, -100],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; Sriharyi'
    });

    this.location.forEach((record) => {
      L.circleMarker([record.latitude, record.longitude], {
        radius: 10,
        color: 'blue',
        fillColor: '#3388ff',
        fillOpacity: 0.5
      }).addTo(this.map);
 
    });

    tiles.addTo(this.map);
  }
}
