import {Component} from "@angular/core";

import {ForecastService} from "../../services/forecast";

class ForecastComponent {

  constructor(forecastService) {
    this.forecastService = forecastService;
  }

  ngOnChanges(changes) {
    if (changes.station.currentValue) {
      this.forecastService.getForecastByStation(changes.station.currentValue)
          .subscribe(forecast => this.currentForecast = forecast.txt_forecast.forecastday);
    }
  }
}

ForecastComponent.annotations = [
  new Component({
    selector: "forecast",
    template: `
      <div class="forecast"
           *ngIf="station">
        <h1>Weather forecast for {{station.city}}, {{station.state}}</h1>
        <div *ngIf="currentForecast">
          <forecast-segment [forecast]="forecast"
                            *ngFor="let forecast of currentForecast"></forecast-segment>
        </div>
        <span *ngIf="!currentForecast">Forecast unavailable</span>
      </div>`,
    inputs: ["station"]
  })
];

ForecastComponent.parameters = [
  [ForecastService]
];


export {ForecastComponent};
