import { TestBed } from '@angular/core/testing';

import { AplicativoService } from './services/aplicativo.service';

describe('AplicativoService', () => {
  let service: AplicativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AplicativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
