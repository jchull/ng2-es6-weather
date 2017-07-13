// import {Http, HTTP_PROVIDERS} from "angular2/http";


export class StationService {
  constructor() {
    // this.http = http;
  }

  getNearestStationToZipcode(zipcode) {
    return "t-"+zipcode;
  };

}

// StationService.parameters = [[Http]];
