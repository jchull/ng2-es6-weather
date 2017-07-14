import {Component} from "@angular/core";

class ForecastSegmentComponent { }

ForecastSegmentComponent.annotations = [
  new Component({
    selector: "forecast-segment",
    template: require("./forecast-segment.html"),
    inputs: ["forecast"],
    styles: [require("./forecast.css")]
  })
];


export {ForecastSegmentComponent};
