import {Component} from "angular2/core";

import {ForecastService} from "../../services/forecast";
import {StationService} from "../../services/station";

export class QuickZipcodeForecastComponent {

  constructor(forecastService, stationService) {
    this.zipcode = undefined;
    this.forecastService = forecastService;
    this.stationService = stationService;
  }

  clear(){
    this.zipcode = undefined;
  };

  getWeather(){
    console.log("searching for nearest station by zipcode: " + this.zipcode);
    let stationId = this.stationService.getNearestStationToZipcode(this.zipcode);
    console.log("nearest station ID: " + stationId);

    let forecast = this.forecastService.getForecastByStation(stationId);
    console.log("got forecast: " + forecast);
  }

}

QuickZipcodeForecastComponent.annotations = [
  new Component({
    selector: "quick-zipcode-forecast",
    template: require("./quick-zipcode-forecast.html"),
    providers: [ForecastService, StationService]
  })
];

QuickZipcodeForecastComponent.parameters = [
  [ForecastService], [StationService]
];

