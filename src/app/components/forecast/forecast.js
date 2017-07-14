import {Component} from "@angular/core";

import {ForecastService} from "../../services/forecast";

class ForecastComponent {

  constructor(forecastService) {
    this.forecastService = forecastService;
  }

  ngOnChanges(changes){
    if(changes.station.currentValue){
      this.forecastService.getForecastByStation(changes.station.currentValue)
          .subscribe(forecast => this.currentForecast = forecast.txt_forecast.forecastday);
    }
  }
}

ForecastComponent.annotations = [
  new Component({
    selector: "forecast",
    template: require("./forecast.html"),
    inputs: ["station"]
  })
];

ForecastComponent.parameters = [
  [ForecastService]
];


export {ForecastComponent};
