import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class UserService {

    constructor(private db: AngularFireDatabase) {
    }

    getUserData(id) {
        return this.db.object('/userProfile/' + id);
    }

    getRandevular(id): any {
        return this.db.list('/randevular', (ref) => ref.orderByChild('islemYapan').equalTo(id));
    }
}
