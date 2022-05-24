import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCoinComponent } from './card-coin.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [CardCoinComponent],
  imports: [
    CommonModule,
    MatSortModule
  ],
  exports: [CardCoinComponent]
})
export class CardCoinModule { }
