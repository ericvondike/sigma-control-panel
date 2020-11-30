import { EntityState } from '@ngrx/entity';

export interface AddressUsageType {
  id: string,
  code: string,
  label: string,
  description: string
}

// For extending the AddressUsageTypeState Interface, we could always use
// export interface AddressUsageTypeState extends EntityState<AddressUsageType> {}
export type AddressUsageTypeState = EntityState<AddressUsageType>;
