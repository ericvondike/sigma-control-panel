import { EntityState } from '@ngrx/entity';

export interface Feature {
  id: string;
  title: string;
  description: string;
  documentation: string;
}

// For extending the FeatureState Interface, we could always use
// export interface FeatureState extends EntityState<FeatureState> {}
export type FeatureState = EntityState<Feature>;
