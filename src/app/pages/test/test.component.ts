import { Component } from '@angular/core';
import { KiralamaService, UserService } from '../../providers';

@Component({
  selector: 'ngx-test',
  styleUrls: ['./test.component.scss'],
  templateUrl: './test.component.html',
})
export class TestComponent {
  constructor(
    private kiralamaService: KiralamaService,
    private userService: UserService
  ) {
    // this.kiralamaService.randevuEkle("27-04-2018", ["19:00"], "RWpkifH5UsgVWUGVnCNKGpjuQ1B2", "kiralama");
    // this.kiralamaService.randevuGetir("23-04-2018").valueChanges().subscribe(randevular => {
    //   console.log(randevular);
    // });

    this.userService.getRandevular("RWpkifH5UsgVWUGVnCNKGpjuQ1B2").valueChanges().subscribe(randevular => {
      console.log(randevular);
    });
  }
}
