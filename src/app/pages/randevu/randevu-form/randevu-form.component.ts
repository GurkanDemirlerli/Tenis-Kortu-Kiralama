import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { KiralamaService, AuthService } from '../../../providers';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KiralamaModalComponent } from '../kiralama-modal/kiralama-modal.component';
import { RezervasyonModalComponent } from '../rezervasyon-modal/rezervasyon-modal.component';


@Component({
  selector: 'ngx-randevu-form',
  styleUrls: ['./randevu-form.component.scss'],
  templateUrl: './randevu-form.component.html',
})
export class RandevuFormComponent {
  seciliGunIndex = 0;
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
    private authService: AuthService,
    private modalService: NgbModal
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
      { val: "10:00", status: 0, secili: 0 },
      { val: "11:00", status: 0, secili: 0 },
      { val: "12:00", status: 0, secili: 0 },
      { val: "13:00", status: 0, secili: 0 },
      { val: "14:00", status: 0, secili: 0 },
      { val: "15:00", status: 0, secili: 0 },
      { val: "16:00", status: 0, secili: 0 },
      { val: "17:00", status: 0, secili: 0 },
      { val: "18:00", status: 0, secili: 0 },
      { val: "19:00", status: 0, secili: 0 },
      { val: "20:00", status: 0, secili: 0 },
      { val: "21:00", status: 0, secili: 0 },
      { val: "22:00", status: 0, secili: 0 }
    ];
  }

  async kortDurumuGetir(tarih) {
    await this.defaultSaatler();
    await this.kiralamaService.randevuGetir(tarih).valueChanges().subscribe(randevular => {
      randevular.forEach(randevu => {
        let saatIndex = Number(randevu.saat.substr(0, 2)) - 10;

        if (randevu.islemTuru == "kiralama")
          this.saatler[saatIndex].val = "DOLU";
        else
          this.saatler[saatIndex].val = "R.E.Z.";

        this.saatler[saatIndex].secili = 0;
        this.saatler[saatIndex].status = 1;
        this.kiralamaBedeli = 0;
      });
    });

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

  kiralaModal() {
    let kiralanacakSaatler = [];
    this.saatler.forEach(saat => {
      if (saat.secili == 1) {
        kiralanacakSaatler.push(saat.val);
      }
    });
    const activeModal = this.modalService.open(KiralamaModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Ödeme';
    activeModal.componentInstance.modalContent = 'Content';
    activeModal.componentInstance.randevuTarihi = {
      tarih: this.gunler[this.seciliGunIndex].tarih,
      gunAdi: this.gunler[this.seciliGunIndex].gunAdi
    };
    activeModal.componentInstance.randevuSaatleri = kiralanacakSaatler;
    activeModal.componentInstance.kiralamaBedeli = this.kiralamaBedeli;
  }

  rezervasyonModal() {
    let rezervasyonSaatleri = [];
    this.saatler.forEach(saat => {
      if (saat.secili == 1) {
        rezervasyonSaatleri.push(saat.val);
      }
    });
    const activeModal = this.modalService.open(RezervasyonModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Rezervasyon';
    activeModal.componentInstance.modalContent = 'Content';
    activeModal.componentInstance.randevuTarihi = {
      tarih: this.gunler[this.seciliGunIndex].tarih,
      gunAdi: this.gunler[this.seciliGunIndex].gunAdi
    };
    activeModal.componentInstance.randevuSaatleri = rezervasyonSaatleri;
    activeModal.componentInstance.kiralamaBedeli = this.kiralamaBedeli;
  }





}
