import { Component, Input, OnInit } from '@angular/core';

import { Weather } from 'src/app/shared/models/model';

@Component({
  selector: 'app-container-widget',
  templateUrl: './container-widget.component.html',
  styleUrls: ['./container-widget.component.css']
})
export class ContainerWidgetComponent implements OnInit {
@Input() datas: Weather
  constructor() { }

  ngOnInit(): void {
  }

}
