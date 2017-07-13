import {Component} from 'angular2/core';
import {QuickZipcodeForecastComponent} from './components/forecast/quick-zipcode-forecast';

export class AppComponent {

  constructor () {
     this.something = "test";
  }

  getSomething(){
    return this.something;
  }
}

AppComponent.annotations = [
  new Component({
    selector: "ng2-es6-weather",
    template: require("./app.html"),
    directives: [
      QuickZipcodeForecastComponent
    ]
  })
];

// AppComponent.parameters = [
//   [QuickZipcodeForecastComponent]
// ];

