import 'zone.js';
import 'reflect-metadata';
import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./app/app";

let boot = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(AppComponent);
});

module.exports = boot;
