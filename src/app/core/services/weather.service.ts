import { HttpClient, HttpParams } from '@angular/common/http';
import { map, mergeMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { LocalizeService } from './localize.service';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/shared/models/model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
data: Weather
  constructor(private http: HttpClient, private serviceLoc: LocalizeService) { }

  getWeatherWeek(city:string): Observable<Weather> {
    return this.serviceLoc.getLocation(city).pipe(
      mergeMap(({lat,lon}) => {
        let params = new HttpParams()
        .set('lat', lat)
        .set('lon', lon)
        .set('&mode','html')
        .set('lang','it')
        .set('units', 'metric')
        .set('exclude', 'hourly,minutely,current,alerts')
        .set('appid', environment.apiWeather);


        return this.http.get<Weather>(environment.urlWeather, {params})
      }),
      map((result:any) => result.daily.map((daily) => this.data = {
        city:city,
        date: (daily.dt * 1000),
        degress: daily.temp.day,
        status: daily.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${daily.weather[0]?.icon}.png`
      }))
    )
    }
}
