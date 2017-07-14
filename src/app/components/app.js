import {Component} from "@angular/core";

class AppComponent { }

AppComponent.annotations = [
  new Component({
    selector: "ng2-es6-weather",
    template: require("./app.html"),
    styles: [require("./app.css")]
  })
];

export {AppComponent};


