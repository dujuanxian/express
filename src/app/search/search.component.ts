import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  number: string;
  isInvalid = false;

  constructor() { }

  validateNumber() {
    this.isInvalid = this.number.length !== 10 || !(new RegExp('^[0-9]*$').test(this.number));
  }
}
