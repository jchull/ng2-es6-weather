import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./components/app";
import {QuickZipcodeForecastComponent} from "./components/forecast/quick-zipcode-forecast";
import {ForecastComponent} from "./components/forecast/forecast";
import {ForecastSegmentComponent} from "./components/forecast/forecast-segment";


import {ForecastService} from "./services/forecast";
import {StationService} from "./services/station";
class AppModule {
}

AppModule.annotations = [
  new NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, QuickZipcodeForecastComponent, ForecastComponent, ForecastSegmentComponent],
    providers: [ForecastService, StationService],
    bootstrap: [AppComponent]
  })
];

export {AppModule};
