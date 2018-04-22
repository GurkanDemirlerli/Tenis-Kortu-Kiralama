import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { KiralamaService, AuthService } from '../../../providers';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'ngx-randevu-form',
  styleUrls: ['./randevu-form.component.scss'],
  templateUrl: './randevu-form.component.html',
})
export class RandevuFormComponent {
  seciliGunIndex = 1;
  gunler = [
    { tarih: "", gunAdi: "", secili: 1 },
    { tarih: "", gunAdi: "", secili: 0 },
    { tarih: "", gunAdi: "", secili: 0 },
    { tarih: "", gunAdi: "", secili: 0 },
    { tarih: "", gunAdi: "", secili: 0 },
  ];
  kiralamaBedeli = 0;
  saatler = [];
  constructor(
    private kiralamaService: KiralamaService,
    private router: Router,
    private authService: AuthService
  ) {
    for (let i = 0; i < 5; i++) {
      this.gunler[i].tarih = moment().add(i, 'days').format('DD-MM-YYYY');
      this.gunler[i].gunAdi = moment().add(i, 'days').format('dddd');
    }
    this.kortDurumuGetir(moment().format('DD-MM-YYYY'));
    console.log(this.gunler);
  }

  defaultSaatler() {
    this.saatler = [
      { val: "10-00", status: 0, secili: 0 },
      { val: "11-00", status: 0, secili: 0 },
      { val: "12-00", status: 0, secili: 0 },
      { val: "13-00", status: 0, secili: 0 },
      { val: "14-00", status: 0, secili: 0 },
      { val: "15-00", status: 0, secili: 0 },
      { val: "16-00", status: 0, secili: 0 },
      { val: "17-00", status: 0, secili: 0 },
      { val: "18-00", status: 0, secili: 0 },
      { val: "19-00", status: 0, secili: 0 },
      { val: "20-00", status: 0, secili: 0 },
      { val: "21-00", status: 0, secili: 0 },
      { val: "22-00", status: 0, secili: 0 }
    ];
  }
  async kortDurumuGetir(tarih) {
    await this.defaultSaatler();
    await this.kiralamaService.getKortDurumu(tarih).subscribe(item => {
      if (item) {
        if (item["10-00"]) {
          this.saatler[0].status = 1;
          if (item["10-00"][Object.keys(item["10-00"])[0]].islemTuru == "kiralama") {
            this.saatler[0].val = "DOLU";
          } else {
            this.saatler[0].val = "REZ...";
          }
        }
        if (item["11-00"]) {
          this.saatler[1].status = 1;
          if (item["11-00"][Object.keys(item["11-00"])[0]].islemTuru == "kiralama") {
            this.saatler[1].val = "DOLU";
          } else {
            this.saatler[1].val = "REZ...";
          }
        }
        if (item["12-00"]) {
          this.saatler[2].status = 1;
          if (item["12-00"][Object.keys(item["12-00"])[0]].islemTuru == "kiralama") {
            this.saatler[2].val = "DOLU";
          } else {
            this.saatler[2].val = "REZ...";
          }
        }
        if (item["13-00"]) {
          this.saatler[3].status = 1;
          if (item["13-00"][Object.keys(item["13-00"])[0]].islemTuru == "kiralama") {
            this.saatler[3].val = "DOLU";
          } else {
            this.saatler[3].val = "REZ...";
          }
        }
        if (item["14-00"]) {
          this.saatler[4].status = 1;
          if (item["14-00"][Object.keys(item["14-00"])[0]].islemTuru == "kiralama") {
            this.saatler[4].val = "DOLU";
          } else {
            this.saatler[4].val = "REZ...";
          }
        }
        if (item["15-00"]) {
          this.saatler[5].status = 1;
          if (item["15-00"][Object.keys(item["15-00"])[0]].islemTuru == "kiralama") {
            this.saatler[5].val = "DOLU";
          } else {
            this.saatler[5].val = "REZ...";
          }
        }
        if (item["16-00"]) {
          this.saatler[6].status = 1;
          if (item["16-00"][Object.keys(item["16-00"])[0]].islemTuru == "kiralama") {
            this.saatler[6].val = "DOLU";
          } else {
            this.saatler[6].val = "REZ...";
          }
        }
        if (item["17-00"]) {
          this.saatler[7].status = 1;
          if (item["17-00"][Object.keys(item["17-00"])[0]].islemTuru == "kiralama") {
            this.saatler[7].val = "DOLU";
          } else {
            this.saatler[7].val = "REZ...";
          }
        }
        if (item["18-00"]) {
          this.saatler[8].status = 1;
          if (item["18-00"][Object.keys(item["18-00"])[0]].islemTuru == "kiralama") {
            this.saatler[8].val = "DOLU";
          } else {
            this.saatler[8].val = "REZ...";
          }
        }
        if (item["19-00"]) {
          this.saatler[9].status = 1;
          if (item["19-00"][Object.keys(item["19-00"])[0]].islemTuru == "kiralama") {
            this.saatler[9].val = "DOLU";
          } else {
            this.saatler[9].val = "REZ...";
          }
        }
        if (item["20-00"]) {
          this.saatler[10].status = 1;
          if (item["20-00"][Object.keys(item["20-00"])[0]].islemTuru == "kiralama") {
            this.saatler[10].val = "DOLU";
          } else {
            this.saatler[10].val = "REZ...";
          }
        }
        if (item["21-00"]) {
          this.saatler[11].status = 1;
          if (item["21-00"][Object.keys(item["21-00"])[0]].islemTuru == "kiralama") {
            this.saatler[11].val = "DOLU";
          } else {
            this.saatler[11].val = "REZ...";
          }
        }
        if (item["22-00"]) {
          this.saatler[12].status = 1;
          if (item["22-00"][Object.keys(item["22-00"])[0]].islemTuru == "kiralama") {
            this.saatler[12].val = "DOLU";
          } else {
            this.saatler[12].val = "REZ...";
          }
        }
      }
    });
    this.kiralamaBedeli = 0;
  }

  sec(id) {
    if (this.saatler[id].secili == 0) {
      this.saatler[id].secili = 1;
    } else {
      this.saatler[id].secili = 0;
    }
    let bedel = 0;
    this.saatler.forEach(saat => {
      if (saat.secili == 1) {
        bedel = bedel + 100;
      }
    });
    this.kiralamaBedeli = bedel;
    console.log(this.saatler);
  }

  async gunSec(idx) {
    this.gunler.forEach(gun => {
      gun.secili = 0;
    });
    this.gunler[idx].secili = 1;
    this.seciliGunIndex = idx;

    await this.kortDurumuGetir(this.gunler[idx].tarih);
    console.log(this.saatler);
  }

  async kirala() {
    let kiralanacakSaatler = [];
    this.saatler.forEach(saat => {
      if (saat.secili == 1) {
        kiralanacakSaatler.push(saat.val);
      }
    });
    await this.kiralamaService.kirala(this.gunler[this.seciliGunIndex].tarih, kiralanacakSaatler, this.authService.user.uid);
    this.router.navigate(['/']);//faturaya yonelt
  }



  async rezervasyon() {
    let rezervasyonSaatleri = [];
    this.saatler.forEach(saat => {
      if (saat.secili == 1) {
        rezervasyonSaatleri.push(saat.val);
      }
    });
    await this.kiralamaService.rezervasyonYap(this.gunler[this.seciliGunIndex].tarih, rezervasyonSaatleri, this.authService.user.uid);
    this.router.navigate(['/']);//faturaya yonelt
  }

}
