import {Component} from "@angular/core";

import {ForecastService} from "../../services/forecast";
import {StationService} from "../../services/station";

class QuickZipcodeForecastComponent {

  constructor(forecastService, stationService) {
    this.zipcode = undefined;
    this.forecastService = forecastService;
    this.stationService = stationService;
  }

  clear(){
    this.zipcode = undefined;
    this.currentForecast = undefined;
  };

  getWeather(){
    console.log("searching for nearest station by zipcode: " + this.zipcode);
    let stationId = this.stationService.getNearestStationToZipcode(this.zipcode);
    console.log("nearest station ID: " + stationId);

    this.currentForecast = this.forecastService.getForecastByStation(stationId);
    console.log("got forecast: " + this.currentForecast);
  }

}

QuickZipcodeForecastComponent.annotations = [
  new Component({
    selector: "quick-zipcode-forecast",
    template: require("./quick-zipcode-forecast.html")
  })
];

QuickZipcodeForecastComponent.parameters = [
  [ForecastService], [StationService]
];

export {QuickZipcodeForecastComponent};

