import {Component} from "@angular/core";
import {QuickZipcodeForecastComponent} from "./forecast/quick-zipcode-forecast";

class AppComponent {

  constructor() {
  }

}

AppComponent.annotations = [
  new Component({
    selector: "ng2-es6-weather",
    template: require("./app.html")
  })
];

export {AppComponent};


