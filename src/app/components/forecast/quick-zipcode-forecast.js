import {Component} from "@angular/core";

import {StationService} from "../../services/station";

class QuickZipcodeForecastComponent {

  constructor(stationService) {
    this.zipcode = undefined;
    this.stationService = stationService;
  }

  clear(){
    this.zipcode = undefined;
    this.station = undefined;
  };

  findStation(){
    this.stationService.getNearestStationToZipcode(this.zipcode)
        .subscribe(location => this.station = location.nearby_weather_stations.pws.station[0]);
  }

}

QuickZipcodeForecastComponent.annotations = [
  new Component({
    selector: "quick-zipcode-forecast",
    template: require("./quick-zipcode-forecast.html")
  })
];

QuickZipcodeForecastComponent.parameters = [
  [StationService]
];

export {QuickZipcodeForecastComponent};

