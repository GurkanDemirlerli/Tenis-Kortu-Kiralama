import { Component } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailValidator, SpaceValidators, PasswordValidator, TelephoneValidator } from '../../../validators';
import { NotificationsService } from 'angular4-notify';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    protected notificationsService: NotificationsService,
    private router: Router
  ) { }

  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.compose([
        Validators.required,
        EmailValidator.isValid,
        Validators.minLength(10),
        Validators.maxLength(30),
        Validators.email,
        SpaceValidators.cannotContainSpace
      ])
    ]),

    name: new FormControl('', [
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        SpaceValidators.cannotContainSpace
      ])
    ]),

    lastName: new FormControl('', [
      Validators.compose([
        Validators.required,
        TelephoneValidator.isValid,
        Validators.minLength(3),
        Validators.maxLength(20),
        SpaceValidators.cannotContainSpace
      ])
    ]),

    telephone: new FormControl('', [
      Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        SpaceValidators.cannotContainSpace
      ])
    ]),

    //tel
    //passwordverify
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      PasswordValidator.areEqual,
      SpaceValidators.cannotContainSpace
    ])
  });


  get email() {
    return this.registerForm.get('email');
  }

  get name() {
    return this.registerForm.get('name');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get telephone() {
    return this.registerForm.get('telephone');
  }



  register() {
    console.log(this.registerForm.value);
    this.notificationsService.addInfo('kayıt basarılı');

    let isValid = this.authService.register(this.registerForm.value);

    if (!isValid) {
      this.registerForm.setErrors({
        invalidLogin: true
      })
    } else {
      this.router.navigate(['/']);
    }
  }

}