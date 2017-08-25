import { Injectable } from '@angular/core';

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SettingsProvider {
  private REDDITLIMIT:number = 35;
  private DEVINFO = "Developed by Nicola Dileo";

  constructor() {
    console.log('Hello SettingsProvider Provider');
  }

  getDevInfo() {
    return this.DEVINFO;
  }

  getRedditLimit() {
    return this.REDDITLIMIT;
  }

  setRedditLimit(limit:number) {
    this.REDDITLIMIT = limit;
    }
}
