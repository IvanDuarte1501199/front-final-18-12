import { TestBed } from '@angular/core/testing';

import { PersonasRepoService } from './personas-repo.service';

describe('PersonasRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonasRepoService = TestBed.get(PersonasRepoService);
    expect(service).toBeTruthy();
  });
});
