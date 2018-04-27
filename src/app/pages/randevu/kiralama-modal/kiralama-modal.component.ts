import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { KiralamaService, AuthService } from '../../../providers';
import { Router } from '@angular/router';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-kiralama-modal',
  styleUrls: ['./kiralama-modal.component.scss'],
  templateUrl: './kiralama-modal.component.html',
})
export class KiralamaModalComponent {

  config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  title = 'Ödeme İşleminiz Başarıyla Gerçekleşti.';
  content = `Belirttiğiniz vakitte tenis oynayabilirsiniz.`;
  timeout = 5000;
  toastsLimit = 5;
  type = 'default';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;



  modalHeader: string;
  modalContent: string;
  randevuTarihi;
  randevuSaatleri = [];
  kiralamaBedeli;

  constructor(
    private activeModal: NgbActiveModal,
    private kiralamaService: KiralamaService,
    private authService: AuthService,
    private router: Router,
    private toasterService: ToasterService
  ) {

  }

  closeModal() {
    this.activeModal.close();
  }

  async kirala() {
    await this.kiralamaService.randevuEkle(this.randevuTarihi.tarih, this.randevuSaatleri, this.authService.user.uid, "kiralama");
    this.showToast(this.type, this.title, this.content);
    this.activeModal.close();
    // this.router.navigate(['/pages/IslemBasarili']);
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }
}
