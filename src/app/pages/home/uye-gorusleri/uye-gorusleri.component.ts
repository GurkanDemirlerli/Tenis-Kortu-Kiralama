import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-uye-gorusleri',
  styleUrls: ['./uye-gorusleri.component.scss'],
  templateUrl: './uye-gorusleri.component.html',
})
export class UyeGorusleriComponent implements OnInit, OnDestroy {

  contacts: any[];
  recent: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private userService: UserService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe((users: any) => {
        this.contacts = [
          {user: users.nick, type: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla varius tortor a mi rutrum mollis. Maecenas iaculis consequat sem. Suspendisse faucibus vel neque id rhoncus. Vestibulum non nibh augue. Suspendisse mattis eros ut lacus tempor, sit amet pretium nulla porta.'},
          {user: users.eva, type: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis accumsan orci, eget gravida nisi. Maecenas non accumsan ligula. Aenean venenatis dignissim ex et fermentum. Proin semper auctor est, et dictum erat faucibus et. Sed ut orci id enim tempus aliquet. Nulla feugiat consequat aliquet. Etiam dignissim ac dolor id mollis. Praesent felis lectus, sodales volutpat massa quis, condimentum rutrum enim. Fusce luctus rutrum nunc, vel dignissim lectus luctus nec.'},
          {user: users.jack, type: 'Aliquam purus ex, viverra consectetur consectetur non, lacinia sit amet arcu. Suspendisse quis euismod mi. Proin rhoncus fermentum mauris non gravida. In laoreet consequat nibh eget vestibulum. Quisque in lacus condimentum, pellentesque ex a, cursus orci. In hac habitasse platea dictumst. Curabitur quis tellus id massa elementum consectetur. Cras tristique ex erat, ut dictum ante ornare sit amet. Nam suscipit nisl sit amet lectus maximus molestie.'},
          {user: users.lee, type: 'Praesent lobortis libero sed gravida iaculis. Suspendisse nibh neque, lacinia vitae vulputate eget, molestie pharetra sem. Duis varius tincidunt lacus, id eleifend massa laoreet nec. Donec feugiat lorem eget ligula laoreet faucibus. Suspendisse pharetra ultrices commodo. Nullam ac venenatis nunc, rutrum ornare lacus. Morbi faucibus nibh vitae viverra rhoncus. Cras feugiat massa tempor nulla gravida, id consequat lacus vulputate. '},
          // {user: users.alan, type: 'home'},
          // {user: users.kate, type: 'work'},
        ];

        this.recent = [
          {user: users.alan, type: 'home', time: '9:12 pm'},
          {user: users.eva, type: 'home', time: '7:45 pm'},
          {user: users.nick, type: 'mobile', time: '5:29 pm'},
          {user: users.lee, type: 'mobile', time: '11:24 am'},
          {user: users.jack, type: 'mobile', time: '10:45 am'},
          {user: users.kate, type: 'work', time: '9:42 am'},
          {user: users.kate, type: 'work', time: '9:31 am'},
          {user: users.jack, type: 'mobile', time: '8:01 am'},
        ];
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
