import { UserService } from './../../../providers/user.service';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../providers';
import { Router } from '@angular/router';

import { YorumService } from '../../../providers/yorum.service';

@Component({
  selector: 'ngx-yorum-modal',
  styleUrls: ['./yorum-modal.component.scss'],
  templateUrl: './yorum-modal.component.html',
})
export class YorumModalComponent {
  user;
  telephone;
  kullaniciBilgileri;
  icerik;

  constructor(
    private activeModal: NgbActiveModal,
    private yorumService: YorumService,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.authService.authState.subscribe((kullaniciBilgileri) => {
      if (kullaniciBilgileri) {
        this.userService.getUserData(kullaniciBilgileri.uid).valueChanges().subscribe((result) => {
          this.kullaniciBilgileri = result;
          this.kullaniciBilgileri.name = this.kullaniciBilgileri.name + ' ' + this.kullaniciBilgileri.lastName;
        });
      } else {
        this.kullaniciBilgileri = "";
      }
    })
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  closeModal() {
    this.activeModal.close();
  }

  async submit() {
    if (this.user) {
      await this.yorumService.addYorum(this.authService.user.uid, this.icerik, this.kullaniciBilgileri.name);
    }
    else {
    }
    this.activeModal.close();
    // this.router.navigate(['/pages/home']);
  }
}
