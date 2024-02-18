import { TestBed } from '@angular/core/testing';

import { PokemonConsultService } from './pokemon-consult.service';

describe('PokemonConsultService', () => {
  let service: PokemonConsultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonConsultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
