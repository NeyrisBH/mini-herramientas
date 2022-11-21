import { TestBed } from '@angular/core/testing';

import { ListTaksService } from './list-taks.service';

describe('ListTaksService', () => {
  let service: ListTaksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTaksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
