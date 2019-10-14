import { Component, OnInit } from '@angular/core';
import config from './app/weather/json';

interface WeatherConfig {
  city: string;
  averageDailyTemp: number;
  weather: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weatherConfig: WeatherConfig[] = [];

  ngOnInit(): void {
    this.weatherConfig = config;
  }
}
