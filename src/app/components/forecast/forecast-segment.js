import {Component} from "angular2/core";

export class ForecastSegmentComponent {

  constructor() {

  }

  ngOnChanges(changes) {
    console.log("ForecastSegmentComponent changes:" + JSON.stringify(changes));
  }

}

ForecastSegmentComponent.annotations = [
  new Component({
    selector: "forecast-segment",
    template: require("./forecast-segment.html"),
    inputs: ["forecast"]
  })
];


