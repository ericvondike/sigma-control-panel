import { createAction, props } from '@ngrx/store';
import { Feature } from './feature.model';

export const loadFeatures = createAction(
  '[Feature] Load Features'
);

export const loadFeaturesSuccess = createAction(
  '[Feature] Load Features Success',
  props<{ data: any }>()
);

export const loadFeaturesFailure = createAction(
  '[Feature] Load Features Failure',
  props<{ error: any }>()
);

export const actionFeatureUpsertOne = createAction(
  '[Feature] Insert One',
  props<{ feature: Feature }>()
);

export const actionFeatureDeleteOne = createAction(
  '[Feature] Delete One',
  props<{id: string }>()
)
