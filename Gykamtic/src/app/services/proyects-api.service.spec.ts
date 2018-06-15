import { TestBed, inject } from '@angular/core/testing';

import { ProyectsApiService } from './proyects-api.service';

describe('ProyectsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProyectsApiService]
    });
  });

  it('should be created', inject([ProyectsApiService], (service: ProyectsApiService) => {
    expect(service).toBeTruthy();
  }));
});
