import { TestBed, inject } from '@angular/core/testing';

import { LetrasService } from './letras.service';

describe('LetrasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LetrasService]
    });
  });

  it('should be created', inject([LetrasService], (service: LetrasService) => {
    expect(service).toBeTruthy();
  }));
});
