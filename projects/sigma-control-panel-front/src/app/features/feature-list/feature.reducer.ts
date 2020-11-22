import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Action, createReducer, on } from '@ngrx/store';

import { Feature, FeatureState } from './feature.model';
import {
  actionFeatureUpsertOne,
  actionFeatureDeleteOne
} from './feature.actions';

export function sortByTitle(a: Feature, b: Feature): number {
  return a.title.localeCompare(b.title);
}

export const featureAdapter: EntityAdapter<Feature> = createEntityAdapter<
  Feature
>({
  sortComparer: sortByTitle
});

export interface State {
  id: string;
  title: string;
  description: string;
  documentation: string;
}

export const featureFeatureKey = 'feature';

export const initialState: FeatureState = featureAdapter.getInitialState({
  ids: ['1'],
  entities: {
    '1': {
      id: '1',
      title: 'Example',
      description: 'Correct This Example'
    }
  }
});

export const featureReducer = createReducer(
  initialState,
  on(actionFeatureUpsertOne, (state, { feature }) =>
    featureAdapter.upsertOne(feature, state)
  ),

  on(actionFeatureDeleteOne, (state, { id }) =>
    featureAdapter.removeOne(id, state)
  )
);

export function reducer(state: FeatureState | undefined, action: Action) {
  return featureReducer(state, action);
}
