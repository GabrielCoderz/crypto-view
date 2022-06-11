import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
