import { Component } from '@angular/core';

@Component({
  selector: 'ngx-courts-preview',
  styleUrls: ['./courts-preview.component.scss'],
  templateUrl: './courts-preview.component.html',
})
export class CourtsPreviewComponent {

  cameras: any[] = [{
    title: 'Mor Sahalar',
    source: 'assets/images/preview1.jpg',
  }, {
    title: 'Mavi Saha',
    source: 'assets/images/preview2.jpg',
  }, {
    title: 'Kırmızı Kenarlı Saha',
    source: 'assets/images/preview3.jpg',
  }, {
    title: 'Yeşil Saha',
    source: 'assets/images/preview4.jpg',
  }];

  selectedCamera: any = this.cameras[0];

  userMenu = [{
    title: 'Profile',
  }, {
    title: 'Log out',
  }];

  isSingleView = false;

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }
}
