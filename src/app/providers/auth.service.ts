import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthService {

  authState: Observable<firebase.User>;
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {

    this.authState = afAuth.authState;
    this.authState.subscribe(user => {
      this.user = user;
    });

  }

  login(formValue) {
    return this.afAuth.auth.signInWithEmailAndPassword(formValue.email, formValue.password);
  }

  register(registerFormValue) {
    return this.afAuth.auth.createUserWithEmailAndPassword(registerFormValue.email, registerFormValue.password)
      .then(newUser => {
        this.db.list('/userProfile/').update(newUser.uid, { email: registerFormValue.email, name: registerFormValue.name, lastName: registerFormValue.lastName, telephone: registerFormValue.telephone });
      });

  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
