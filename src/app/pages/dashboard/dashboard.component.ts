import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userInput: string = ''

  constructor() { }

  ngOnInit(): void {

  }

  takeUserInput(input: any): void {
    this.userInput = input
  }

}
