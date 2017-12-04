import { TestBed, inject } from '@angular/core/testing';

import { AjoutprojService } from './ajoutproj.service';

describe('AjoutprojService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjoutprojService]
    });
  });

  it('should be created', inject([AjoutprojService], (service: AjoutprojService) => {
    expect(service).toBeTruthy();
  }));
});
