import { YorumModalComponent } from './yorum-modal/yorum-modal.component';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    private modalService: NgbModal
  ) { }

  yorumModal() {
    const activeModal = this.modalService.open(YorumModalComponent, { size: 'lg', container: 'nb-layout' });
  }
}
