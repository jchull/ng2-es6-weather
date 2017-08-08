import {Http} from "@angular/http";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

const BASE_URL = `http://api.wunderground.com/api/${process.env.WEATHER_API_KEY}/geolookup/q/`;

export class StationService {
  constructor(http) {
     this.http = http;
  }

  getNearestStationToZipcode(zipcode) {
    return this.http.get(BASE_URL + zipcode + ".json")
        .map(res => res.json().location);
  };

}

StationService.parameters = [[Http]];
