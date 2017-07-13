import {Component} from 'angular2/core';

class AppComponent {
  static get annotations() {
    return [
      new Component({
        selector: "ng2-es6-weather",
        template: require("./app.html")
      })
    ];
  }

  constructor () {}
}

export {AppComponent};
