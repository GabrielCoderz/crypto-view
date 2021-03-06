import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardCoinModule } from 'src/app/shared/card-coin/card-coin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HeaderModule } from 'src/app/shared/header/header.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardCoinModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    HeaderModule,
  ]
})
export class DashboardModule { }
