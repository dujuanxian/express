import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { ITracking } from './tracking';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor ( private http: HttpClient ) { }

  getTrackingList(number: string): Observable<ITracking[]> {
    return this.http.get<ITracking[]>(`/tracking?number=${number}`);
  }
}
