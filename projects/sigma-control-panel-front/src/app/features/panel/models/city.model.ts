import { EntityState } from '@ngrx/entity';

export interface City {
  code: string,
  label: string,
}

// For extending the CityState Interface, we could always use
// export interface CityState extends EntityState<City> {}
export type CityType = EntityState<City>;
