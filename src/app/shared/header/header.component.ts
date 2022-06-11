import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output('user-input') userInput = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUpInput($event: any): void {
    this.userInput.emit($event.target.value)
  }

}
