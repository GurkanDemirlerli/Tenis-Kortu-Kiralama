import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/operators/map';
@Injectable()
export class WeatherService {
  domain = "http://api.wunderground.com/api/dd82ac4dcd1405c4/geolookup/conditions/forecast/q/Turkey/Istanbul.json"
  // options;
  constructor(private http: Http) { }

  // setCors() {
  //   this.options = new RequestOptions({
  //     headers: new Headers({
  //       'Access-Control-Allow-Origin': '*'
  //     })
  //   });
  // }

  getHavaDurumu(timestamp) {
    // this.setCors();
    return this.http.get(this.domain).map(res => res.json());
  }
}
