import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import {
  AddressUsageType,
  AddressUsageTypeState
} from '../models/address-usage-type.model';
import {
  actionAddressUsageTypesDeleteOne,
  actionAddressUsageTypesUpsertOne
} from './address-usage-types.actions';
import { Action, createReducer, on } from '@ngrx/store';


export function sortByCode(a: AddressUsageType, b: AddressUsageType): number {
  return a.code.localeCompare(b.code);
}

export const addressUsageTypeAdapter: EntityAdapter<AddressUsageType> = createEntityAdapter<AddressUsageType>(
  {
    sortComparer: sortByCode
  }
);

export const initialState: AddressUsageTypeState = addressUsageTypeAdapter.getInitialState(
  {
  ids: ['123'],
  entities: {
    '123': {
      id: '123',
      code: 'TESTCODE',
      label: 'TESTLABEL',
      description:
        'TESTDESCRIPTION'
    }
  }
  }
);

export const reducer = createReducer(
  initialState,
  on(actionAddressUsageTypesUpsertOne, (state, { addressUsageType }) =>
    addressUsageTypeAdapter.upsertOne(addressUsageType, state)
  ),
  on(actionAddressUsageTypesDeleteOne, (state, { id }) =>
    addressUsageTypeAdapter.removeOne(id, state)
  )
);

export function addressUsageTypeReducer(state: AddressUsageTypeState | undefined, action: Action) {
  return reducer(state, action);
}
