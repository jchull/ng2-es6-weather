import {Component} from "angular2/core";

export class ForecastComponent {

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
    inputs: ["forecast"]
  })
];


