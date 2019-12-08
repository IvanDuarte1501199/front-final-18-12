import { TestBed } from '@angular/core/testing';

import { PropiedadesRepoService } from './propiedades-repo.service';

describe('PropiedadesRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropiedadesRepoService = TestBed.get(PropiedadesRepoService);
    expect(service).toBeTruthy();
  });
});
