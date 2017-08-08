import {Component} from "@angular/core";

class ForecastSegmentComponent {
}

ForecastSegmentComponent.annotations = [
  new Component({
    selector: "forecast-segment",
    template: `
      <div class="forecast-segment">
        <div class="segment-header">
          {{forecast.title}}
        </div>
        <div>
          <img src={{forecast.icon_url}} alt={{forecast.conditions}}/>
        </div>
        <div class="day-summary">{{forecast.fcttext}}</div>

      </div>
    `,
    inputs: ["forecast"],
    styles: [require("./forecast.css")]
  })
];


export {ForecastSegmentComponent};
