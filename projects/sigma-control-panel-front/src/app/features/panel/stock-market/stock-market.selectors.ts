import { createSelector } from '@ngrx/store';

import { PanelState, selectpanel } from '../panel.state';

export const selectStockMarket = createSelector(
  selectpanel,
  (state: PanelState) => state.stocks
);
