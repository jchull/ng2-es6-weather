import {Http, HTTP_PROVIDERS} from "@angular/http";

export class ForecastService {
  constructor(http){
    this.http = http;
  }

  getForecastByStation(stationId){

    return ["id-"+stationId];
  };

}

ForecastService.parameters = [[Http]];
