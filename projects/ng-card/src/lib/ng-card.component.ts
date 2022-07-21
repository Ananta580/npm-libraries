import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-card',
  template: `
    <div class="ap-card-caontainer">
      <div class="ap-card-title">
        {{ title }}
      </div>
      <div class="ap-card-subtitle">{{ subTitle }}</div>
      <div class="ap-card-description">{{ description }}</div>
    </div>
  `,
  styles: [],
})
export class NgCardComponent implements OnInit {
  @Input('Title') title!: string;
  @Input('SubTitle') subTitle!: string;
  @Input('Description') description!: string;
  constructor() {}

  ngOnInit(): void {}
}
