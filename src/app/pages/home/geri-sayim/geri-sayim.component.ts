import { Router } from '@angular/router';
import { KiralamaService } from './../../../providers/kiralama.service';
import { Component, OnInit } from '@angular/core';
import { UserService, AuthService } from '../../../providers';
import * as moment from 'moment';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/map";

@Component({
  selector: 'ngx-geri-sayim',
  styleUrls: ['./geri-sayim.component.scss'],
  templateUrl: './geri-sayim.component.html',
})

export class GeriSayimComponent implements OnInit {
  detay = false;
  durum = "randevuYok";
  user;
  randevular;
  yaklasanRandevular = [];
  randevuBildirim;
  geriSayim;
  countdown = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };


  constructor(
    private authService: AuthService,
    private userService: UserService,
    private kiralamaService: KiralamaService,
    private router: Router
  ) { }


  async ngOnInit() {
    // let dT=moment().format('X');
    await this.authService.authState.subscribe(async (user) => {
      this.user = user;
      console.log(user);
      await this.userService.getRandevular(this.user.uid).valueChanges().subscribe(async (randevular) => {
        await randevular.sort(this.tarihSirala);
        this.randevular = randevular;
        console.log(this.randevular);
        await this.yaklasanRandevularHesapla();
        console.log(this.yaklasanRandevular);
        if (this.yaklasanRandevular.length > 0) {
          this.randevuBildirim = this.yaklasanRandevular[0];
          let tarih = moment().subtract({ hours: 1 }).format('DD-MM-YYYY');
          let saat = moment().subtract().format('HH:mm');
          if (this.randevuBildirim.tarih === tarih && this.randevuBildirim.saat.substr(0, 2) == saat.substr(0, 2)) {
            this.geriSayim = true;
            this.durum = "geriSayim";
          }
          if (this.geriSayim) {
            this.startCountdownTimer();
          } else {
            this.durum = "gelecekRandevu";
            this.startGelecekRandevuTimer();
          }
        }
      });
    });
  }
  startGelecekRandevuTimer() {
    let now = moment(); //todays date
    let end = moment(this.randevuBildirim.tarih + " " + this.randevuBildirim.saat, "DD-MM-YYYY HH:mm");
    const interval = 1000;
    let duration = moment.duration(end.diff(now)).asSeconds() * 1000;
    console.log(duration);
    const stream$ = Observable.timer(0, interval)
      // .finally(() => this.countdown = "Süreniz Bitti")
      .takeUntil(Observable.timer(duration + interval))
      .map(value => duration - value * interval);
    stream$.subscribe(value => {
      value = value / 1000;
      let hours = value / 3600;
      let minutes = value / 60;
      let seconds = value;
      this.countdown.hours = Math.floor(hours);
      this.countdown.minutes = Math.floor(minutes % 60);
      this.countdown.seconds = Math.floor(seconds % 60);
    });
  }

  startCountdownTimer() {
    let now = moment(); //todays date
    let end = moment(this.randevuBildirim.tarih + " " + this.randevuBildirim.saat, "DD-MM-YYYY HH:mm");
    end = end.add({ hours: 1 });//degistir.
    const interval = 1000;
    let duration = moment.duration(end.diff(now)).asSeconds() * 1000;
    console.log(duration);
    const stream$ = Observable.timer(0, interval)
      // .finally(() => this.countdown = "Süreniz Bitti")
      .takeUntil(Observable.timer(duration + interval))
      .map(value => duration - value * interval);
    stream$.subscribe(value => {
      value = value / 1000;
      let hours = value / 3600;
      let minutes = value / 60;
      let seconds = value;
      this.countdown.hours = Math.floor(hours);
      this.countdown.minutes = Math.floor(minutes % 60);
      this.countdown.seconds = Math.floor(seconds % 60);
    });
  }

  toggleDetay() {
    if (this.detay)
      this.detay = false;
    else
      this.detay = true;
  }

  navigateToRandevu() {
    this.router.navigate(['pages/randevu']);
  }

  uzat() {
    this.router.navigate(['pages/randevu']);
  }


  yaklasanRandevularHesapla() {
    //Gec vakitlerde sıkıntılı olabilir.
    let tarih = moment().subtract({ hours: 1 }).format('DD-MM-YYYY');
    console.log(tarih);
    let saat = moment().subtract({ hours: 1 }).format('HH:mm');
    this.randevular.forEach(randevu => {
      if (randevu.tarih.substr(6, 4) > tarih.substr(6, 4))
        return this.yaklasanRandevular.push(randevu);
      else if (randevu.tarih.substr(6, 4) < tarih.substr(6, 4))
        return;

      if (randevu.tarih.substr(3, 2) > tarih.substr(3, 2))
        return this.yaklasanRandevular.push(randevu);
      else if (randevu.tarih.substr(3, 2) < tarih.substr(3, 2))
        return;

      if (randevu.tarih.substr(0, 2) > tarih.substr(0, 2))
        return this.yaklasanRandevular.push(randevu);
      else if (randevu.tarih.substr(0, 2) < tarih.substr(0, 2))
        return;

      if (randevu.saat > saat)
        return this.yaklasanRandevular.push(randevu);
      else if (randevu.saat < saat)
        return;
    });
  }

  tarihSirala(a, b) {

    if (a.tarih.substr(6, 4) < b.tarih.substr(6, 4))
      return -1;
    else if (a.tarih.substr(6, 4) > b.tarih.substr(6, 4))
      return 1;

    if (a.tarih.substr(3, 2) < b.tarih.substr(3, 2))
      return -1;
    else if (a.tarih.substr(3, 2) > b.tarih.substr(3, 2))
      return 1;

    if (a.tarih.substr(0, 2) < b.tarih.substr(0, 2))
      return -1;
    else if (a.tarih.substr(0, 2) > b.tarih.substr(0, 2))
      return 1;

    if (a.saat < b.saat)
      return -1;
    else if (a.saat > b.saat)
      return 1;
    return 0;
  }

}
