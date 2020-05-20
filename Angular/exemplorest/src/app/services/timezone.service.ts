import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timezone } from '../model/timezone';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService
{
  constructor(private http: HttpClient) { }

  public buscarTimezone(timeZone: string): Observable<Timezone>
  {
    return this.http.get<Timezone>('http://worldtimeapi.org/api/timezone/' +  timeZone);
  }
}
