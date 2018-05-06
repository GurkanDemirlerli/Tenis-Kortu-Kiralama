import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/operators/map';
@Injectable()
export class WeatherService {
  domain = "https://api.darksky.net/forecast/124873cd73af253663e6754b53d3f123/40.740814,30.333189"
  settings = "?units=si&exclude=daily";
  options;
  constructor(private http: Http) { }

  setCors() {
    this.options = new RequestOptions({
      headers: new Headers({
        'Access-Control-Allow-Origin': '*'
      })
    });
  }

  getHavaDurumu(timestamp) {
    this.setCors();
    return this.http.get(this.domain + "," + timestamp + this.settings,  this.options).map(res => res.json());
  }
}
