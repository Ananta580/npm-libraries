import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgCardComponent } from './ng-card.component';

@NgModule({
  declarations: [NgCardComponent],
  imports: [CommonModule],
  exports: [NgCardComponent],
})
export class NgCardModule {}
