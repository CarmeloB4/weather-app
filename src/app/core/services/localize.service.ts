import { HttpClient, HttpParams } from '@angular/common/http';
import {map, tap} from 'rxjs/operators'

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Localize {
  lat: string,
  lon:string
}

@Injectable({
  providedIn: 'root'
})
export class LocalizeService {
data: Localize
  constructor(private http: HttpClient) { }

  getLocation(city:string): Observable<Localize>{
    let params = new HttpParams()
    .set('city', city)
    .set('format','json')

    return this.http.get<{lat:string,lon:string}>(environment.urlLocalizationApi, {params}).pipe(
      map((result:any) => this.data = {
        lat: result[0].lat,
        lon: result[0].lon
      })
    )
  }
}
