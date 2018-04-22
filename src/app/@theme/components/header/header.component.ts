import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { AuthService, UserService } from '../../../providers';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private analyticsService: AnalyticsService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.userService.getUserData(user.uid).valueChanges().subscribe((result) => {
          this.user = result;
          this.user.name = this.user.name + ' ' + this.user.lastName;
        });
      } else {
        this.user = "";
      }
    })
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.router.navigate(['/pages/home']);
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  navigateLogin() {
    this.router.navigate(['/pages/authentication/login']);
  }

  navigateRegister() {
    this.router.navigate(['/pages/authentication/register']);
  }

  navigateLogout() {
    this.router.navigate(['/pages/authentication/logout']);
  }
}
