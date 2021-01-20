import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-container-search',
  templateUrl: './container-search.component.html',
  styleUrls: ['./container-search.component.css']
})
export class ContainerSearchComponent implements OnInit {
  @Output() cityName: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  getCity(city:string):void{
    this.cityName.emit(city)
  }

}
