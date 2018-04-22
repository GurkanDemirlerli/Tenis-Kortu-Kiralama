import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-day-card',
  styleUrls: ['./day-card.component.scss'],
  template: `
    <nb-card  [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ tarih }}</div>
      </div>
    </nb-card>
  `,
})
export class DayCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on: number;
  @Input() tarih: string;
}
