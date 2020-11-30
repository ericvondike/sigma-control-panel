import { createSelector } from '@ngrx/store';

import { selectRouterState } from '../../../core/core.module';
import { selectpanel, PanelState } from '../panel.state';

import { addressUsageTypeAdapter } from './address-usage-types.reducer';

const {selectEntities, selectAll } = addressUsageTypeAdapter.getSelectors();

export const selectAddressUsageTypes = createSelector(
  selectpanel,
  (state: PanelState) => state.addressUsageTypes
);

export const selectAllAddressUsageTypes = createSelector(selectAddressUsageTypes, selectAll);
export const selectAddressUsageTypesEntities = createSelector(selectAddressUsageTypes, selectEntities);

export const selectSelectedAddressUsageType = createSelector(
  selectAddressUsageTypesEntities,
  selectRouterState,
  (entities, params) => params && entities[params.state.params.id]
  )
