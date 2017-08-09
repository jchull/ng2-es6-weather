import {Http} from "@angular/http";

const BASE_URL = `http://api.wunderground.com/api/${process.env.WEATHER_API_KEY}/forecast/q/`;

export default class ForecastService {
  constructor(http){
    this.http = http;
  }

  getForecastByStation(station){
    return this.http.get(BASE_URL + station.state + "/" + station.city + ".json")
        .map(res => res.json().forecast);
  };

}

ForecastService.parameters = [[Http]];
