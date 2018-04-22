import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-duyuru',
  styleUrls: ['./duyuru.component.scss'],
  templateUrl: './duyuru.component.html',
})
export class DuyuruComponent implements OnDestroy {

  currentTheme: string;
  themeSubscription: any;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
