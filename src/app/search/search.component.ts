import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent {
  number: string;
  isInvalid = false;
  trackingList = [];

  constructor(
    private searchService: SearchService
  ) { }

  validateNumber() {
    this.isInvalid = this.number.length !== 10 || !(new RegExp('^[0-9]*$').test(this.number));
  }

  searchNumber () {
    this.searchService.getTrackingList().subscribe(( response) => {
      this.trackingList = response.data;
    });
  }
}
