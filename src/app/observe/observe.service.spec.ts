import {inject, TestBed} from '@angular/core/testing';

import {ObserveService} from './observe.service';

describe('ObserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObserveService]
    });
  });

  it('should be created', inject([ObserveService], (service: ObserveService) => {
    expect(service).toBeTruthy();
  }));
});
