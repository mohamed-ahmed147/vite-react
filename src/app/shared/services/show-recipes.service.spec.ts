import { TestBed } from '@angular/core/testing';

import { ShowRecipesService } from './show-recipes.service';

describe('ShowRecipeService', () => {
  let service: ShowRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
