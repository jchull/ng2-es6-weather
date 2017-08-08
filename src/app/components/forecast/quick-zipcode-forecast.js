import {Component} from "@angular/core";

import {StationService} from "../../services/station";

class QuickZipcodeForecastComponent {

  constructor(stationService) {
    this.stationService = stationService;
  }

  clear() {
    this.zipcode = undefined;
    this.station = undefined;
  };

  findStation() {
    this.station = undefined;
    this.stationService.getNearestStationToZipcode(this.zipcode)
        .subscribe(location => this.station = location.nearby_weather_stations.pws.station[0]);
  }

}


QuickZipcodeForecastComponent.annotations = [
  new Component({
    selector: "quick-zipcode-forecast",
    template: `
      <form #zipForm="ngForm"
            style="margin:20px;">
        <label for="zipcode">Zipcode</label>
        <input type="text"
               name="zipcode"
               id="zipcode"
               minlength="5"
               maxlength="5"
               required
               [(ngModel)]="zipcode"/>
        <button (click)="findStation()"
                [disabled]="!zipForm.form.valid">Submit
        </button>
        <button (click)="clear()">Clear</button>
        <forecast [station]="station"></forecast>
      </form>
    `
  })
];

QuickZipcodeForecastComponent.parameters = [
  [StationService]
];

export {QuickZipcodeForecastComponent};

