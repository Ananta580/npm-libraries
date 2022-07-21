import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-card-ap',
  template: `
    <div
      class="ap-card-container"
      [style.borderRadius]="border ? '8px' : '0px'"
      [ngClass]="hoverable ? 'ap-card-container-hover' : ''"
    >
      <div class="ap-card-title">
        {{ title }}
      </div>
      <div class="ap-card-subtitle">{{ subTitle }}</div>
      <img
        *ngIf="imageSrc != undefined"
        class="ap-card-image"
        [style.borderRadius]="border ? '8px' : '0px'"
        [src]="imageSrc"
      />
      <div class="ap-card-description">{{ description }}</div>
    </div>
  `,
  styleUrls: ['./ng-card.component.css'],
})
export class NgCardComponent implements OnInit {
  @Input('Title') title!: string;
  @Input('Subtitle') subTitle!: string;
  @Input('Description') description!: string;
  @Input('Border') border!: boolean;
  @Input('Image') imageSrc: string | undefined = undefined;
  @Input('Hoverable') hoverable!: boolean;
  constructor() {}

  ngOnInit(): void {}
}
