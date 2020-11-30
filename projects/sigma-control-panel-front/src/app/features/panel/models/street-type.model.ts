import { EntityState } from '@ngrx/entity';

export interface StreetType {
  code: string,
  label: string,
}

// For extending the StreetTypeState Interface, we could always use
// export interface StreetTypeState extends EntityState<StreetType> {}
export type StreetTypeState = EntityState<StreetType>;
