import {Component} from "@angular/core";

export default class AppComponent {
}

AppComponent.annotations = [
  new Component({
    selector: "ng2-es6-weather",
    template: `
      <div class="weather-app">
        <div class="header">
          <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 335.9 355.8"><g transform="matrix(1.25 0 0 -1.25 -188.8 636.7)"><g transform="scale(.1)"><path d="m2850 5094-1339-472 211-1754 1129-621 1135 629 212 1755-1348 463z" fill="#b3b3b3"/><path d="m4064 4529-1217 415.1v-2549l1020 564.6 197.2 1569z" fill="#af2b2d"/><path d="m1661 4522 181.3-1569 1004-557.1v2549l-1186-422.7z" fill="#df2e31"/><path d="m3129 3677-280 584.6-246.5-584.6h526.4zm106.7-245.8h-742.1l-166-415.3-308.8-5.71 828 1842 856.9-1842h-286.2l-181.8 421z" fill="#f2f2f2"/><path d="m2847 4852 2.21-590.6 279.7-585.1h-281.2l-0.63-245 388.9-0.38 181.8-421 295.5-5.48-866.2 1848z" fill="#b3b3b3"/></g></g></svg>
          </div>
          <h2>Angular2 ES6 Weather</h2>
        </div>
        <quick-zipcode-forecast></quick-zipcode-forecast>
      </div>
    `,
    styles: [require("./app.css")]
  })
];

