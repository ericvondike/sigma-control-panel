import { createSelector } from '@ngrx/store';

import { selectRouterState } from '../../core/core.module';
import { selectFeatures, FeatureGlobalState } from './feature.module.state';

import { featureAdapter } from './feature.reducer';

const { selectEntities, selectAll } = featureAdapter.getSelectors();

export const selectFeature = createSelector(
  selectFeatures,
  (state: FeatureGlobalState) => state.features
);

export const selectAllFeatures = createSelector(selectFeature, selectAll);
export const selectFeatureEntities = createSelector(selectFeature, selectEntities);

export const selectSelectedFeature = createSelector(
  selectFeatureEntities,
  selectRouterState,
  (entities, params) => params && entities[params.state.params.id]
)




