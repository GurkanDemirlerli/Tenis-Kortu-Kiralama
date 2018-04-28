import { Component, OnInit } from '@angular/core';
import { UserService, AuthService } from '../../../providers';


@Component({
  selector: 'ngx-randevularim',
  styleUrls: ['./randevularim.component.scss'],
  templateUrl: './randevularim.component.html',
})
export class RandevularimComponent implements OnInit {
  user;
  randevular = [];
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.userService.getRandevular(this.user.uid).valueChanges().subscribe((randevular) => {
        this.randevular = randevular;
        console.log(this.randevular);
      });
    });
  }
}
