import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class ForecastService {
  constructor(http){
    this.http = http;
  }

  getForecastByStation(stationId){

    return ["id-"+stationId];
  };

  static get providers() {
    return [[Http]];
  }

}
