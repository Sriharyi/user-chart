import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { MyLocation, UserRegistrationCount, UserRegistrationCountByDay, UserRegistrationCountByState } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiUrl = `${environment.apiUrl}/users`

  constructor(private http:HttpClient) { }

  getRegistrations(year: number) {

    const queryParams = new HttpParams().set('year', year);
    return this.http.get<UserRegistrationCount[]>(`${this.apiUrl}/registrations`, { params: queryParams });
  }


  getRegistrationsByDay(year: number, month: number) {
    

      const queryParams = new HttpParams().set('year', year).set('month', month);

      return this.http.get<UserRegistrationCountByDay[]>(`${this.apiUrl}/registrations/month`, { params: queryParams });
  }


  getRegistrationByState() {
    return this.http.get<UserRegistrationCountByState[]>(`${this.apiUrl}/registrations/state`);
  }
  
  getRegistrationByGeo() {
    return this.http.get<MyLocation[]>(`${this.apiUrl}/registrations/geo`);
  }


}
