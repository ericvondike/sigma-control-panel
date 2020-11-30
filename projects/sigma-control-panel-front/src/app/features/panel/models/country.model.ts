import { EntityState } from '@ngrx/entity';

export interface Country {
  code: string,
  label: string,
}

// For extending the CountryState Interface, we could always use
// export interface CountryState extends EntityState<Country> {}
export type CountryType = EntityState<Country>;
