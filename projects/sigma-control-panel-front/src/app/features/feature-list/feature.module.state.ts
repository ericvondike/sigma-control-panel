import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module';
import { featureReducer } from './feature.reducer';
import { FeatureState as featrueLocalState } from './feature.model';

export const FEATURE_NAME = 'feature';

export const selectFeatures = createFeatureSelector<State, FeatureGlobalState>(
  FEATURE_NAME
);

export const reducers: ActionReducerMap<FeatureGlobalState> = {
  features: featureReducer,
}

export interface FeatureGlobalState {
  features: featrueLocalState;
}

export interface State extends AppState {
  feature: FeatureGlobalState;
}
