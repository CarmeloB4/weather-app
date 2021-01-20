import { Component, OnInit } from '@angular/core';

import { Weather } from 'src/app/shared/models/model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
datas: Weather
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(city:string):void {
  this.weatherService.getWeatherWeek(city).subscribe((result) => this.datas = result)
  }

}
