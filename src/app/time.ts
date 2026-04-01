import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Time {
  constructor(private http: HttpClient) {}

  getCurrentTime() {
    this.http.get('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata')
    .subscribe((response: any) => {
      console.log('current time from backend:', response.currentTime);
    });
  }
}