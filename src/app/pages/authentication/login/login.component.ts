import { Component } from '@angular/core';
import { AuthService } from '../../../providers';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailValidator, SpaceValidators, PasswordValidator } from '../../../validators';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  loginForm = new FormGroup({
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

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      PasswordValidator.areEqual,
      SpaceValidators.cannotContainSpace
    ])
  });


  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    console.log(this.loginForm.value);
    let isValid = this.authService.login(this.loginForm.value);
    if (!isValid) {
      this.loginForm.setErrors({
        invalidLogin: true
      })
    } else {
      this.router.navigate(['/']);
    }


  }
}
