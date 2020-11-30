import { createAction, props } from '@ngrx/store';
import { AddressUsageType } from '../models/address-usage-type.model';

export const loadAddressUsageTypeActionss = createAction(
  '[AddressUsageTypeActions] Load AddressUsageTypeActionss'
);

export const loadAddressUsageTypeActionssSuccess = createAction(
  '[AddressUsageTypeActions] Load AddressUsageTypeActionss Success',
  props<{ data: any }>()
);

export const loadAddressUsageTypeActionssFailure = createAction(
  '[AddressUsageTypeActions] Load AddressUsageTypeActionss Failure',
  props<{ error: any }>()
);

export const actionAddressUsageTypesUpsertOne = createAction(
  '[AddressUsageTypes] Upsert One',
  props<{addressUsageType: AddressUsageType}>()
);

export const actionAddressUsageTypesDeleteOne = createAction(
  '[AddressUsageTypes] Delete One',
  props<{id: string}>()
);
