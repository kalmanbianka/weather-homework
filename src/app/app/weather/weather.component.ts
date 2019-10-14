import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() city: string = 'N/A';
  @Input() averageDailyTemp: number = 0;
  @Input() weather: string[] = [];
  data: any = [];


  constructor() { }

  ngOnInit() {
  }

}
