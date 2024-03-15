import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { LoginLog } from "../_models/login";

@Injectable({
    providedIn: 'root'
  })
export class LoginService {

    private apiUrl =`${environment.apiUrl}/logins`
    
    constructor(private http: HttpClient) { }


    public getLoginLog(date: Date) {
        const isoString = date.toISOString(); 
        const formattedDate = isoString.slice(0, -1); 
        console.log(formattedDate);
        const params:HttpParams = new HttpParams().set('date', formattedDate);
        return this.http.get<LoginLog[]>(`${this.apiUrl}/logs`, {params});
    }

}