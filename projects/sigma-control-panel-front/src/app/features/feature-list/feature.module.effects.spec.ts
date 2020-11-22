import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FeatureModuleEffects } from './feature.module.effects';

describe('Feature.ModuleEffects', () => {
  let actions$: Observable<any>;
  let effects: FeatureModuleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FeatureModuleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FeatureModuleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
