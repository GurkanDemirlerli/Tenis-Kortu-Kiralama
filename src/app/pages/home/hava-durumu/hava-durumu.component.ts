import { Component } from '@angular/core';
import { WeatherService } from '../../../providers/weather.service';
import * as moment from 'moment';

@Component({
  selector: 'ngx-hava-durumu',
  styleUrls: ['./hava-durumu.component.scss'],
  templateUrl: './hava-durumu.component.html',
})

export class HavaDurumuComponent {
  forecast = [{
    temperature: {
      current: "",
      max: "",
      min: ""
    },
    date: {
      day: "",
      weekday_short: "",
      monthname_short: ""
    },
    logo: "",
    wind: "",
    hum: ""
  }, {
    temperature: {
      current: "",
      max: "",
      min: ""
    },
    date: {
      day: "",
      weekday_short: "",
      monthname_short: ""
    },
    logo: "",
    wind: "",
    hum: ""
  }, {
    temperature: {
      current: "",
      max: "",
      min: ""
    },
    date: {
      day: "",
      weekday_short: "",
      monthname_short: ""
    },
    logo: "",
    wind: "",
    hum: ""
  }, {
    temperature: {
      current: "",
      max: "",
      min: ""
    },
    date: {
      day: "",
      weekday_short: "",
      monthname_short: ""
    },
    logo: "",
    wind: "",
    hum: ""
  },];
  constructor(
    private weatherService: WeatherService
  ) {
    let today = moment().format('X');
    this.weatherService.getHavaDurumu(today).subscribe(data => {
      for (let i = 0; i < 5; i++) {
        this.forecast[i].temperature.current = data.forecast.simpleforecast.forecastday[i].high.celsius;
        this.forecast[i].temperature.max = data.forecast.simpleforecast.forecastday[i].high.celsius;
        this.forecast[i].temperature.min = data.forecast.simpleforecast.forecastday[i].low.celsius;
        this.forecast[i].date.day = data.forecast.simpleforecast.forecastday[i].date.day;
        this.forecast[i].date.weekday_short = data.forecast.simpleforecast.forecastday[i].date.weekday_short;
        this.forecast[i].date.monthname_short = data.forecast.simpleforecast.forecastday[i].date.monthname_short;
        this.forecast[i].logo = data.forecast.simpleforecast.forecastday[i].icon_url;
        this.forecast[i].wind = data.forecast.simpleforecast.forecastday[i].avewind.kph;
        this.forecast[i].hum = data.forecast.simpleforecast.forecastday[i].avehumidity;
      }
    });
  }
}
