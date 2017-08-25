import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SettingsProvider } from './settings-provider';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RedditData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RedditData {
  APIURL = 'https://www.reddit.com/r/gifs/top/.json?limit=';
  constructor(public http: Http, public settingsProvider: SettingsProvider) {
    console.log('Hello RedditData Provider');
  }
  
  getRemoteData() {
     return this.http.get(this.APIURL + this.settingsProvider.getRedditLimit()) // ...using post request
                .map((res) => res.json()) // ...and calling .json() on the response to return data
                .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
