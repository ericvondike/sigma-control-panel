import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module';

import { todosReducer } from './todos/todos.reducer';
import { TodosState } from './todos/todos.model';
import { stockMarketReducer } from './stock-market/stock-market.reducer';
import { StockMarketState } from './stock-market/stock-market.model';
import { bookReducer } from './crud/books.reducer';
import { formReducer } from './form/form.reducer';
import { FormState } from './form/form.model';
import { BookState } from './crud/books.model';
import { AddressUsageTypeState } from './models/address-usage-type.model';
import { addressUsageTypeReducer } from './address/address-usage-types.reducer';

export const FEATURE_NAME = 'panel';
export const selectpanel = createFeatureSelector<State, PanelState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<PanelState> = {
  todos: todosReducer,
  stocks: stockMarketReducer,
  books: bookReducer,
  form: formReducer,
  addressUsageTypes: addressUsageTypeReducer,
};

export interface PanelState {
  todos: TodosState;
  stocks: StockMarketState;
  form: FormState;
  books: BookState;
  addressUsageTypes: AddressUsageTypeState
}

export interface State extends AppState {
  panel: PanelState;
}
