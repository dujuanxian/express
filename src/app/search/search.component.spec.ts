import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { SearchService } from './search.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { of } from 'rxjs/internal/observable/of';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ FormsModule ],
      providers: [ SearchService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    searchService = fixture.debugElement.injector.get(SearchService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('should validate number', () => {
    it('failed when search input length is not 10', () => {
      const hostElement = fixture.nativeElement;
      const searchInput: HTMLInputElement = hostElement.querySelector('input');

      searchInput.value = '111';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.dispatchEvent(new Event('keyup'));
      fixture.detectChanges();

      const errorMessage: HTMLElement = hostElement.querySelector('.error-message');
      expect(errorMessage.textContent).toBe('请输入10位有效数字单号');
    });

    it('failed when search input is not number', () => {
      const hostElement = fixture.nativeElement;
      const searchInput: HTMLInputElement = hostElement.querySelector('input');

      searchInput.value = '123456789a';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.dispatchEvent(new Event('keyup'));
      fixture.detectChanges();

      const errorMessage: HTMLElement = hostElement.querySelector('.error-message');
      expect(errorMessage.textContent).toBe('请输入10位有效数字单号');
    });

    it('success when search input is 10 length of number', () => {
      const hostElement = fixture.nativeElement;
      const searchInput: HTMLInputElement = hostElement.querySelector('input');

      searchInput.value = '1234567890';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.dispatchEvent(new Event('keyup'));
      fixture.detectChanges();

      const errorMessage: HTMLElement = hostElement.querySelector('.error-message');
      expect(errorMessage).toBeNull();
    });
  });

  describe('should search number', () => {
    it ('success with tracking list', function () {
      const trackingList = [{
        date: '2018-01-01 10:10',
        status: '已出库'
      }];
      spyOn(searchService, 'getTrackingList').and.returnValue(of({ data: trackingList }));

      component.number = '1234567890';
      component.searchNumber();

      expect(component.trackingList).toEqual(trackingList);
    });
  });
});
