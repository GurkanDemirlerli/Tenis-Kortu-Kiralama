import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-islem-card',
  styleUrls: ['./islem-card.component.scss'],
  template: `
    <nb-card>
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ aciklama }}</div>
      </div>
    </nb-card>
  `,
})
export class IslemCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on = true;
  @Input() aciklama: string;
}
