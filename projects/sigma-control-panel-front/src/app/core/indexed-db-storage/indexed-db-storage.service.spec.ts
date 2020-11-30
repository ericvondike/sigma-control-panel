import { TestBed } from '@angular/core/testing';

import { IndexedDbStorageService } from './indexed-db-storage.service';

describe('IndexedDbStorageService', () => {
  let service: IndexedDbStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexedDbStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
