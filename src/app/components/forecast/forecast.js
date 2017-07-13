import {Component} from "@angular/core";

class ForecastComponent {

  constructor() {

  }

  ngOnChanges(changes){
    console.log("ForecastComponent changes:" + JSON.stringify(changes));
  }



}

ForecastComponent.annotations = [
  new Component({
    selector: "forecast",
    template: require("./forecast.html"),
    inputs: ["forecastData"]
  })
];


export {ForecastComponent};
