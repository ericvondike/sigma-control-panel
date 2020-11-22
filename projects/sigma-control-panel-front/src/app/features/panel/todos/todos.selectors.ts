import { createSelector } from '@ngrx/store';

import { PanelState, selectpanel } from '../panel.state';

export const selectTodosState = createSelector(
  selectpanel,
  (state: PanelState) => state.todos
);

export const selectTodosItems = createSelector(
  selectTodosState,
  (state) => state.items
);

export const selectTodosFilter = createSelector(
  selectTodosState,
  (state) => state.filter
);

export const selectTodos = createSelector(
  selectTodosItems,
  selectTodosFilter,
  (items, filter) => {
    if (filter === 'ALL') {
      return items;
    } else {
      const predicate = filter === 'DONE' ? (t) => t.done : (t) => !t.done;
      return items.filter(predicate);
    }
  }
);

export const selectRemoveDoneTodosDisabled = createSelector(
  selectTodosItems,
  (items) => !items.some((item) => item.done)
);
