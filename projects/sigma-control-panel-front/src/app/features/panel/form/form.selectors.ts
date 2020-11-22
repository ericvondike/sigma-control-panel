import { createSelector } from '@ngrx/store';

import { PanelState, selectpanel } from '../panel.state';

export const selectFormState = createSelector(
  selectpanel,
  (state: PanelState) => state.form
);
