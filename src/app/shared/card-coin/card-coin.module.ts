import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCoinComponent } from './card-coin.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CardCoinComponent],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [CardCoinComponent]
})
export class CardCoinModule { }
