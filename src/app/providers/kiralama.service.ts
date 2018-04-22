import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class KiralamaService {

    constructor(private db: AngularFireDatabase) {
    }

    private getItem(tarih, saat) {
        return this.db.object('/kortDurumu/' + tarih + '/' + saat);
    }

    // kirala(tarih, saat, kullaniciId) {
    //     let item$ = this.getItem(tarih, saat);
    //     item$.valueChanges().first().subscribe(item => {
    //         if (!item) {
    //             return this.db.list('/kortDurumu/' + tarih + "/" + saat).push({
    //                 "kiralayan": kullaniciId
    //             });
    //         }
    //     });
    // }

    kirala(tarih, saatler, kullaniciId) {
        saatler.forEach(saat => {
            let item$ = this.getItem(tarih, saat);
            item$.valueChanges().first().subscribe(item => {
                if (!item) {
                    return this.db.list('/kortDurumu/' + tarih + "/" + saat).push({
                        "islemYapan": kullaniciId,
                        "islemTuru": "kiralama",
                        "tarih": tarih,
                        "saat": saat
                    });
                }
            });
        });
    }

    rezervasyonYap(tarih, saatler, kullaniciId) {
        saatler.forEach(saat => {
            let item$ = this.getItem(tarih, saat);
            item$.valueChanges().first().subscribe(item => {
                if (!item) {
                    return this.db.list('/kortDurumu/' + tarih + "/" + saat).push({
                        "islemYapan": kullaniciId,
                        "islemTuru": "rezervasyon",
                        "tarih": tarih,
                        "saat": saat
                    });
                }
            });
        });
    }

    getKortDurumu(tarih) {
        return this.db.object('/kortDurumu/' + tarih).valueChanges().first();
    }

    getUserData(id) {
        return this.db.object('/userProfile/' + id);
    }
}
