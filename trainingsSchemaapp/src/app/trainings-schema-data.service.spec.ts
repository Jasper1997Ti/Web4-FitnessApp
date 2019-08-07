import { TestBed } from '@angular/core/testing';

import { TrainingsSchemaDataService } from './trainings-schema-data.service';

describe('TrainingsSchemaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingsSchemaDataService = TestBed.get(TrainingsSchemaDataService);
    expect(service).toBeTruthy();
  });
});
