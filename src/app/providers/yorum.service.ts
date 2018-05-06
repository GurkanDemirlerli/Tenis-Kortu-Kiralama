import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Injectable()
export class YorumService {

    constructor(private db: AngularFireDatabase) {
    }

    getYorum(id) {
        return this.db.object('/yorumlar/' + id);
    }

    getYorumlar(): any {
        return this.db.list('/yorumlar', (ref) => ref.orderByChild('tarih'));
    }

    addYorum(kullaniciId, icerik, kullaniciAdi) {
        let tarih = moment().format('YYYY-MM-DD HH:mm:ss');
        return this.db.list('/yorumlar').push({
            "owner": kullaniciId,
            "tarih": tarih,
            "icerik": icerik,
            "kullaniciAdi": kullaniciAdi
        });
    }
}
