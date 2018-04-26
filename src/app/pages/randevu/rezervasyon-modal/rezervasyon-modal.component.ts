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

  }

  closeModal() {
    this.activeModal.close();
  }

  async rezervasyonYap() {
    await this.kiralamaService.rezervasyonYap(this.randevuTarihi.tarih, this.randevuSaatleri, this.authService.user.uid);
    this.activeModal.close();    
    this.router.navigate(['/pages/IslemBasarili']);
  }
}
