import { TestBed } from '@angular/core/testing';

import { AlquileresRepoService } from './alquileres-repo.service';

describe('AlquileresRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlquileresRepoService = TestBed.get(AlquileresRepoService);
    expect(service).toBeTruthy();
  });
});
