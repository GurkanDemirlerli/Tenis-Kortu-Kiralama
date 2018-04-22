import { Component } from '@angular/core';
import { KiralamaService } from '../../providers';

@Component({
  selector: 'ngx-test',
  styleUrls: ['./test.component.scss'],
  templateUrl: './test.component.html',
})
export class TestComponent {
  constructor(
    private kiralamaService: KiralamaService
  ) {
    this.kiralamaService.kirala("23-04-2018", "20-00", "RWpkifH5UsgVWUGVnCNKGpjuQ1B2");
    this.kiralamaService.getKortDurumu("22-04-2018");
  }
}
