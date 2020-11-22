import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';

import { LocalStorageService } from '../../core/core.module';
import { State } from './feature.module.state';

import { actionFeatureUpsertOne, actionFeatureDeleteOne } from './feature.actions';
import { selectFeature } from './feature.selectors';

export const FEATURES_KEY = 'feature-list';


@Injectable()
export class FeatureEffects {
  persistFeatures = createEffect(
    () => this.actions$.pipe(
      ofType(actionFeatureUpsertOne, actionFeatureDeleteOne),
      withLatestFrom(this.store.pipe(select(selectFeature))),
      tap(([actions, featuresState]) => 
      this.localStorageService.setItem(FEATURES_KEY, featuresState))
    ),
    { dispatch: false }
  )



  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private localStorageService: LocalStorageService) {}

}
