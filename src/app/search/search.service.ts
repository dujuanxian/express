import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  getTrackingList(): Observable<any> {
    return of(null);
  }
}
