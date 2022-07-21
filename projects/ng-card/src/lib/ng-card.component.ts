import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-card',
  template: `
    <div class="ap-card-container">
      <div class="ap-card-title">
        {{ title }}
      </div>
      <div class="ap-card-subtitle">{{ subTitle }}</div>
      <div class="ap-card-description">{{ description }}</div>
    </div>
  `,
  styles: [
    '.ap-card-container{}',
    '.ap-card-title{}',
    '.ap-card-subtitle{}',
    '.ap-card-description{}',
  ],
})
export class NgCardComponent implements OnInit {
  @Input('Title') title!: string;
  @Input('Subtitle') subTitle!: string;
  @Input('Description') description!: string;
  constructor() {}

  ngOnInit(): void {}
}
