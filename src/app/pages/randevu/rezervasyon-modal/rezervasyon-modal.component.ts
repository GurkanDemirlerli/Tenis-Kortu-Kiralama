import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { KiralamaService, AuthService } from '../../../providers';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-rezervasyon-modal',
  styleUrls: ['./rezervasyon-modal.component.scss'],
  templateUrl: './rezervasyon-modal.component.html',
})
export class RezervasyonModalComponent {
  user;
  modalHeader: string;
  modalContent: string;
  randevuTarihi;
  randevuSaatleri = [];
  kiralamaBedeli;

  constructor(
    private activeModal: NgbActiveModal,
    private kiralamaService: KiralamaService,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  closeModal() {
    this.activeModal.close();
  }
  navigateToRegister() {
    this.router.navigate(['/pages/authentication/register']);
    this.activeModal.close();
  }

  async rezervasyonYap() {
    if (this.user) {
      await this.kiralamaService.randevuEkle(this.randevuTarihi.tarih, this.randevuSaatleri, this.authService.user.uid, "rezervasyon");
      this.activeModal.close();
    }
  }
}
