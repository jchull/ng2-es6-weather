import {Http} from "@angular/http";


export class StationService {
  constructor(http) {
     this.http = http;
  }

  getNearestStationToZipcode(zipcode) {
    return "t-"+zipcode;
  };

}

StationService.parameters = [[Http]];
