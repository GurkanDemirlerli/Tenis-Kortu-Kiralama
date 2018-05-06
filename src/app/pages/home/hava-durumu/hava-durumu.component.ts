import { Component } from '@angular/core';
import { WeatherService } from '../../../providers/weather.service';
import * as moment from 'moment';

@Component({
  selector: 'ngx-hava-durumu',
  styleUrls: ['./hava-durumu.component.scss'],
  templateUrl: './hava-durumu.component.html',
})

export class HavaDurumuComponent {
  todaysTemperature;
  constructor(
    private weatherService: WeatherService
  ) {
    let today = moment().format('X');
    this.weatherService.getHavaDurumu(today).subscribe(data => this.todaysTemperature = data.currently.temperature);
  }
}
